import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
  div {
    background: var(--cinza3);
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 338px) {
      padding: 10px;
    }
    .greybutton:hover {
      background-color: var(--cinza2);
    }
  }
  h2 {
    color: var(--cinza0);
    font-size: 18px;
    padding: 20px 20px 10px 20px;
  }
  h1 {
    color: var(--rosa);
    padding: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    button:hover {
      background-color: var(--rosaFocus);
    }
    div {
      text-align: left;
    }
  }
  p {
    margin-bottom: 20px;
    color: var(--cinza1);
    font-size: 12px;
  }
`;