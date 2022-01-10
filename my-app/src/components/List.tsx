import React, { useEffect, useState } from 'react'

type ListProps = {
  addTodo: string
}

export default function List({ addTodo }: ListProps) {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const localTodoList = localStorage.getItem("TODO");
    localTodoList && setTodoList(JSON.parse(localTodoList));
  }, [addTodo]);

  const handleDelete = (event: any) => {
    alert("정말 삭제하시겠습니가?");
    todoList.map((todo, index) => (
      todo === event.target.closest("li").children[0].textContent
      && todoList.splice(index, 1)
    ))
    localStorage.setItem("TODO", JSON.stringify(todoList));
    setTodoList(todoList);
  };


  console.log(todoList)

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
