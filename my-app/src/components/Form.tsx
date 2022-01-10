import React, { useState } from 'react'

type FormProps = {
  onSubmit: (todo: string) => void;
};

export default function Form({ onSubmit }: FormProps) {
  const [todo, setTodo] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTodo(value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocalTodo(todo);
    onSubmit(todo);
    setTodo('');
  };

  const setLocalTodo = (todo: string) => {
    const localTodoList = localStorage.getItem("TODO");
    {
      localTodoList
        ? localStorage.setItem("TODO", JSON.stringify(JSON.parse(localTodoList).concat(todo)))
        : localStorage.setItem("TODO", JSON.stringify([todo]));
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={onChange} name="todoInput"  />
        <button type="submit">추가</button>
      </form>
    </>
  );
}
