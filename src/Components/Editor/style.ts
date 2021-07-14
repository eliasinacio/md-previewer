import styled from 'styled-components';

export const Container = styled.div`
  background-color: #232323;
		
  #editor {
    @media (max-width: 600px) { height: 400px; }
    width: 100%;
    height: 100%;
    resize: none;
    padding: 20px;
    color: #DDDEEE;
    background-color: #353535;
    font-family: "Lato";
    font-size: 12.5pt;
  }
`;