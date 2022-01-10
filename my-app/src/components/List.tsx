import React, { useEffect, useState } from 'react'

type ListProps = {
  addTodo: string;
}

export default function List({ addTodo }: ListProps) {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const localTodoList = localStorage.getItem("TODO");
    localTodoList && setTodoList(JSON.parse(localTodoList));
  }, [addTodo]);

  const handleDelete = ({target}: any) => {
    todoList.map((todo, index) => (
      todo === target.closest("li").children[0].textContent
      && todoList.splice(index, 1)
    )); 
    setTodoList([...todoList]);
    console.log(todoList);
    localStorage.setItem("TODO", JSON.stringify(todoList));
  };


  return (
    <>
      <h2>리스트</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo}>
            <span>{todo}</span>
            <button onClick={handleDelete}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}
