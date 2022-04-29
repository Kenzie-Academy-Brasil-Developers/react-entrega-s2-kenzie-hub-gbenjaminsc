import { Modal } from "@mui/material/";
import { ModalHeader } from './styles';
import Button from '../Button';
import Input from '../Input';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from "react-toastify";
import api from '../../services/api'
import { Container, Label } from "./styles";

function ModalAdd ({open, handleClose, token, loadTechnologies}) {
    const schema = yup.object().shape({
        title: yup.string().required("Este campo é obrigatório").matches(/[a-zA-Z\u00C0-\u00FF]/gi,
        "O nome pode conter somente letras e espaço em branco")
    })

    const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(schema)})

    function onSubmit(data) {
        api.post('/users/techs', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }) 
        .then((response) => {
            toast.success("Sucesso ao cadastrar nova tecnologia")
            handleClose()
            loadTechnologies()
        })
        .catch((err) => {
            toast.error("Não foi possível cadastrar nova tecnologia")
        })
    }

    return(
        <div>
            <Modal open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
            >
                <Container>
                    <div>
                        <ModalHeader>
                            <h2>Criar tecnologia</h2>
                            <Button onClick={()=>handleClose()}>X</Button>
                        </ModalHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input register={register}
                            name="title"
                            label="Nome"
                            error={errors.title?.message}/>
                            <Label>Selecionar Status</Label>
                            <select {...register("status")}>
                                <option>Iniciante</option>
                                <option>Intermediário</option>
                                <option>Avançado</option>
                            </select>
                            <Button className="pinkSchema" pinkSchema type="submit">
                                Cadastrar tecnologia
                            </Button>
                        </form>
                    </div>
                </Container>
            </Modal>
        </div>
    )
}

export default ModalAdd