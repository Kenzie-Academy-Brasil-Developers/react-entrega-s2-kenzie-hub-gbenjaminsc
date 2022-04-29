import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--cinza4);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 18px;
    align-items: center;
    border-radius: 4px;

    h2 {
        color: var(--cinza0);
        font-size: 20px;
    }

    p {
        color: var(--cinza1);
        font-size: 14px;
    }

    button {
        width: 35px;
        color: var(--cinza1);
    }
`