import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; /* 16 x 0,9375 = 15, assim diminuo 1px em todos elementos que usam rem na aplicacao */
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%; /* 16 x 0,9375 = 14 */
    }
  }
  
  body {
    position: relative;
    background: #282828;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    /* width: 100%; */
    min-width: 65rem;
    overflow-y: scroll;
  }
  
  body,
  input,
  textarea,
  button,
  a {
    /* font: 400 1rem "Inter", sans-serif; 1rem = 16px, usamos assim para responsividade */
    font-family: 'RocknRoll One', sans-serif;
    font-size: 1rem;
  }
  
  button {
    cursor: pointer;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }
  
  a {
    color: inherit; /* herdar a cor do container dos links */
    text-decoration: none;
  }
`;

/* :root {
    --white: #fff;
    --background: #312E38;
    --gray-line: #dcdde0;
    --text: #666666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  } */

/* 
  XENIA DEF
  Cor base: #282828
  Discreta: #424449 
  #59646B
  #6F868C
  (Cores para barras/backgrounds de menu/tabelas)
  Discreta: #89AAA9
  #A9CEC2
  (Cores texto)
  
  #9C606F
  #DA8371
  (cores destaque)
  */
