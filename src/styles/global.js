import  { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
      --rosa: #ff577f;
      --rosaFocus: #ff427f;
      --rosaNegative: #59323f;

      --cinza4: #121214;
      --cinza3: #212529;
      --cinza2: #343b41;
      --cinza1: #868e96;
      --cinza0: #f8f9fa;

      --verdeSucesso: #3fe864;
      --vermelhoNegativo:#e83f5b;
    }

    body {
        background-color: var(--cinza4);
        font-family: sans-serif;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    button {
        cursor: pointer;
    }
`