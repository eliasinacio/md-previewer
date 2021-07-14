import React from 'react';

import GlobalStyle from './main-styles/global';
import Editor from './Components/Editor'
import Preview from './Components/Preview'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Editor />
        <Preview />
      </div>
    </>
  );
}

export default App;