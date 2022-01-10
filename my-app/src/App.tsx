import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [addTodo, setAddTodo] = useState('');
  const onSubmit = (todo: string) => {
    setAddTodo(todo);
  }

  return (
    <>
      <Form onSubmit={onSubmit} />
      <List addTodo={addTodo} />
    </>
  );
}

export default App;
