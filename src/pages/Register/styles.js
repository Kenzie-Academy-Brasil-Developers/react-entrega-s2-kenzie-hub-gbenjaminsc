import styled from 'styled-components'

export const Container = styled.div`
    h1 {
        font-size: 25px;
        color: var(--rosa);
    }

    h2 {
        font-size: 20px;
    }

    .divTitulo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0px;
        button {
            width: 100px;
            margin: 0px;
        }
    }

    button:hover {
        background-color: var(--cinza2);
    }

    form {
        background-color: var(--cinza3);
        padding: 30px;
        display: flex;
        flex-direction: column;
        color: var(--cinza0);
        max-width: 344px;
        @media screen and (max-width: 379px) {
            align-items: center;
            padding: 30px 15px;
        }

        select {
            padding: 10px;
            border: 1px solid var(--cinza0);
            background-color: var(--cinza2);
            border-radius: 4px;
            width: 25px;
            align-self: center;
            width: 264px;
            color: var(--cinza0);
            margin-top: 20px;
        }

        .erro {
            border: 1px solid var(--vermelhoNegativo);
        }

        button:hover {
            background-color: var(--rosaFocus);
        }
    }
`

export const P = styled.p`
    font-size: 12px;
    color:var(--cinza1);
    margin-top: 10px;
`

export const Erro = styled.p`
    color: var(--vermelhoNegativo);
    height: 15px;
    font-size: 12px;
    margin: 10px 0px 10px 0px;
`