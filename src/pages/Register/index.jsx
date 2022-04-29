import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify";
import { Container, P, Erro } from './styles';
import api from '../../services/api'
import Button from '../../components/Button'
import Input from '../../components/Input'

function Register ({ handleNavigation, authenticated}) {
    const schema = yup.object().shape({
    name: yup.string().required("Este campo é obrigatório").matches(/[a-zA-Z\u00C0-\u00FF]/gi, 'O nome pode conter somente letras e espaço em branco'),
    email: yup.string().required("Este campo é obrigatório").email("Email inválido"),
    password: yup.string().required("Este campo é obrigatório").min(8, "A sua senha deve ter no mínimo 8 caracteres!"),
    confirmPassword: yup.string().required("Este campo é obrigatório").oneOf([yup.ref("password"), null], "As senhas não batem"),
    module: yup.string().required("Este campo é obrigatório")
    })

    const history = useHistory()

    const {register, handleSubmit, formState:{errors}} = useForm({ resolver:yupResolver(schema)})

    function onSubmit({name, email, password, module}) {
        const user = {name, email, password, course_module: module, bio: "null", contact: "(XX) XXXX-XXXX"}
        api.post('/users', user)
        .then((response) => {
            toast.success("Sucesso ao criar a conta")
            return history.push('/home')
        })
        .catch((err) => {
            console.log(err)
            toast.error("Erro ao criar a conta, tente outro email")
        })
    }

    if(authenticated) {
        return <Redirect to="/home"/>
    }

    return(
        <Container>
            <div className="divTitulo">
                <h1>Kenzie Hub</h1>
                <Button onClick={()=> handleNavigation('/')}>Voltar</Button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Crie sua conta</h2>
                <P>Rápido e grátis, vamos nessa</P>
                <Input label="Nome" placeholder="Digite aqui seu nome" register={register} name="name" error={errors.name?.message}/>
                <Input label="Email" placeholder="Digite aqui seu email" register={register} name="email" error={errors.email?.message}/>
                <Input register={register} label="Senha" placeholder="Digite aqui sua senha" name="password" type="password" error={errors.password?.message}/>
                <Input label="Confirmar Senha" placeholder="Confirme sua senha" register={register} name="confirmPassword" type="password" error={errors.confirmPassword?.message}/>
                <select {...register("module")} className={errors.module && 'selectError'}>
                    <option value="">Selecione um módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">M1</option>
                    <option value="Segundo módulo (Frontend Avançado)">M2</option>
                    <option value="M3">M3</option>
                    <option value="M4">M4</option>
                </select>
                <Erro>{errors.module?.message}</Erro>
                <Button type='submit' negativeSchema>Cadastre-se</Button>
            </form>
        </Container>
    )
}

export default Register