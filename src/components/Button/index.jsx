import { Container } from "./styles";

function Button ({children, negativeSchema = false, pinkSchema = false, greySchema = false, ...rest}) {
    return (
        <Container pinkSchema={pinkSchema} negativeSchema={negativeSchema} greySchema={greySchema} type="button" {...rest}>
            {children }
        </Container>
    )
}

export default Button