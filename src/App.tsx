import React, { useState } from 'react';

import GlobalStyle from './main-styles/global';
import Editor from './Components/Editor'
import Preview from './Components/Preview'

import preformat from './preformat';

const App: React.FC = () => {
  const [ markdown, setMarkdown ] = useState(preformat as string);

  const handleChangeMarkdown = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value)
  }

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Editor 
          value={markdown}
          onChange={handleChangeMarkdown}
        />
        <Preview markdown={markdown}/>
      </main>
    </>
  );
}

export default App;