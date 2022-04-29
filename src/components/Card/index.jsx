import { Container } from "./styles";
import Button from '../Button';
import api from '../../services/api';
import { FaTrashAlt } from 'react-icons/fa'
import { toast } from "react-toastify";

function Card({technology, token, loadTechnologies}) {
    function deleteTechnology() {
        api.delete(`/users/techs/${technology.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            toast.success("Sucesso ao deletar tecnologia")
            loadTechnologies();
        })
        .catch((err) => {
            toast.error("Erro ao deletar tecnologia")
        })
    }

    return (
        <Container>
            <h2>{technology.title}</h2>
            <p>{technology.status}</p>
            <Button onClick = {deleteTechnology}>
                <FaTrashAlt/>
            </Button>
        </Container>
    )
}

export default Card