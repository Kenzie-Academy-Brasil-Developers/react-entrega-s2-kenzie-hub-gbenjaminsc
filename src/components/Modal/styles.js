import styled from 'styled-components'

export const ModalHeader = styled.div`
    color: var(--cinza0);
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 8px 0px 8px 0px;
    background-color: var(--cinza2);

    h2 {
        font-size: 18px;
    }

    button {
        margin: 0;
        width: 10px;
        color: var(--cinza1);
        background-color: transparent;
    }
`
export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 300px;
    }

    form {
        background-color: var(--cinza4);
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
    }

    .pinkSchema {
        margin-top: 20px;
    }
`

export const Label = styled.div`
    text-align: left;
    color: var(--cinza0);
    font-size: 12px;
    margin-bottom: 5px;
`