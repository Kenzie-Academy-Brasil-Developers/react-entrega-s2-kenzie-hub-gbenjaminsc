import styled from 'styled-components'

export const Container = styled.button`
    padding: 10px;
    background-color: ${props => props.pinkSchema ? "#FF577F" : props.greySchema ? "#868E96" : props.negativeSchema ? "#59323F" : "#212529" };
    border: none;
    border-radius: 4px;
    color:var(--cinza0);
    width: 265px;
    height: 38px;
    margin-bottom: 20px;
    align-self: center;
`