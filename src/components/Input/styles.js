import styled from "styled-components"

export const Container = styled.div``

export const InputContainer = styled.div`
    input {
        background-color: var(--cinza2);
        border: ${props => props.isErrored ? "1px solid var(--vermelhoNegativo)" : "1px solid var(--cinza0)" };
        width: 264px;
        color: var(--cinza0);
        border-radius: 4px;
        padding: 10px;
    }

    p{
        color: var(--vermelhoNegativo);
        height: 15px;
        font-size: 12px;
        margin: 10px 0px 10px 0px;
    }
`

export const Label = styled.div`
    color: ${props => props.isErrored ? "var(--vermelhoNegativo)" : "var(--cinza0)"};
    font-size: 12px;
    text-align: left;
    padding: 5px 0px;
`