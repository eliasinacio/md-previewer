import React, { ChangeEventHandler } from "react";

import { Container } from "./style";

interface EditorProps { 
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const Editor: React.FC<EditorProps> = (props) => {
  return (
    <Container>
      <textarea 
        id='editor'
        value={props.value}
        onChange={props.onChange}	
      />
    </Container>
  )
}

export default Editor;