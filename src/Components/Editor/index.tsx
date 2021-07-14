import React from "react";
import { Container } from "./style";

const Editor: React.FC = () => {
  return (
    <Container>
      <textarea 
        id='editor'
        value={'hello world'}
        onChange={() => console.log('a')}	
      />
    </Container>
  )
}

export default Editor;