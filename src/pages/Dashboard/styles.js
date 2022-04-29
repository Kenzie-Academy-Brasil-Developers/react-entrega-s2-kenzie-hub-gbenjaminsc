import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid var(--cinza3);
  padding: 10px 0px;
  h1 {
    font-size: 25px;
    color: var(--rosa);
  }
  button {
    width: 100px;
    margin: 0px;
  }
  button:hover {
        background-color: var(--cinza2);
    }
`;

export const Introduction = styled.div`
    border-bottom: 1px solid var(--cinza3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100vw;
    @media screen and (min-width: 400px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    h2 {
        color: var(--cinza0);
        padding: 30px 0px 20px 0px;
        font-size: 20px;
    }
    p {
        color: var(--cinza1);
        padding: 0px 0px 30px 0px;
        font-size: 14px;
        margin: 0px;
    }
`;

export const TechnologiesTitle = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
    width: 100vw;
    h2 {
        color: var(--cinza0)        
    }
    button {
        width: 40px;
        height: 40px;
        font-size: 20px;
        margin: 0%;
    }
    button:hover {
        background-color: var(--cinza2);
    }
`;






