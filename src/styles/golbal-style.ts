import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  button, a, label {
    cursor: pointer;
    padding: 0;
  }

  input {
    padding: 0;
  }

  button {
    border: none;
    background-color: inherit;
  }

  button:focus, a:focus {
    outline: none;
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`