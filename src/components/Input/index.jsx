import { Container, InputContainer, Label } from "./styles";

function Input({label, register, name, error, ...rest}) {
    return(
        <Container>
                <Label isErrored={!!error}>{label}</Label>
            <InputContainer isErrored={!!error}>
                <input {...register(name)} {...rest} />
                <p>{error}</p>
            </InputContainer>
        </Container>
    )
}

export default Input