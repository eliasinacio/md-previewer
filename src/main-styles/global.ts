import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`   
  *, button {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      height: 100vh;
      #root {
          height: 100%;
      }
  }

  .App {
    height: 100%;

    display: grid;
    grid-template-columns: 50vw 50vw;
    @media (max-width: 600px) { display: flex; flex-direction: column; }

    background-color: #234566;	
  }
`