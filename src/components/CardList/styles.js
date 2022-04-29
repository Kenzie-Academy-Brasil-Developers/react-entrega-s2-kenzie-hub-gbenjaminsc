import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 680px;
    width: 90%;
    max-width: 1020px;
    border-radius: 4px;
    background-color: var(--cinza3);
    align-items: center;
    padding: 20px;
    gap: 10px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    div:hover {
        background-color: var(--cinza2);
        cursor: pointer;
    }
`