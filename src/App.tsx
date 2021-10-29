import React from 'react';
import { MainForm } from './MainForm'
import { Container } from 'react-bootstrap'

const App = () => {
  const submit = (values: Object) => {console.log(values)}
  return (
    <>
    <div style={{margin: '5vw 15vw'}}>
      <h1>React Redux Form</h1>
      <h5>{'by Tomasz Nowak <tomnowdev@gmail.com>'}</h5>
    </div>
    <MainForm onSubmit={submit}/>
    </>
  );
}

export default App;