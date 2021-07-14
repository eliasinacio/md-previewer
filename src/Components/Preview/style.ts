import styled from 'styled-components';

export const Container = styled.section`
  background-color: #EEE;
  color: #393939; 
  padding: 10px 30px;
  font-family: 'Open Sans';
  
  h1, h2 {
    margin-bottom: 20px;           
  }
  
  h3, h4 {
    margin-bottom: 15px; 
  }
  
  * {
    margin-bottom: 10px;
  }
  
  a {
    color: #6767aa;
  }
  
  table, th, td {
    border-collapse: collapse;
    border: 1px solid black;
    padding: 2px 5px;
  }
  
  ul, ol {
    li { 
      margin-left: 20px; 
      margin-bottom: 5px;
    }
  }
  
  code {
    white-space: pre-wrap;       /* css-3 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;   
  }
  overflow-x: scroll;

  img {
    max-width: 400px;
  }
`;