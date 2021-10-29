import React from 'react';
import { MainForm } from './MainForm'

const App = () => {
  const submit = (values: any) => { console.log(values)}
  return (
    <>
      <MainForm onSubmit={submit}/>
    </>
  );
}

export default App;