import React from 'react';
import { Container } from './style';

import marked from 'marked';

interface PreviewProps { markdown: string }

const renderer = new marked.Renderer();

const Preview: React.FC<PreviewProps> = (props) => {
  return (
    <Container 
    dangerouslySetInnerHTML={{
      __html: marked(props.markdown , { renderer: renderer })
    }}
    />
  );
}

export default Preview;