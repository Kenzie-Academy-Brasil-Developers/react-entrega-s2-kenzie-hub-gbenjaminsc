import { Container } from "./styles";
import Card from '../Card'

function CardList ({technologies, token, loadTechnologies}) {
    return(
        <Container>
            {technologies.map((technology, index) => {
                return <Card technology={technology} key={index} token={token} loadTechnologies={loadTechnologies}/>
            })}
        </Container>
    )
}

export default CardList