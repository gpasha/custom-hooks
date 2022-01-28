import React from 'react';
import useRequest from '../hooks/useRequest';

export default function ToDoList2() {
  const [list, isLoading, error] = useRequest(fetchTodos)

  function fetchTodos() {
    return fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Request error</h2>
  }
  
  return (
    <div style={{padding: 25, height: 500, overflow: 'hidden', overflowY: 'auto'}}>
      {!!list.length && list.map(el => (
        <div key={el.id} style={{padding: 10, border: '2px solid #000'}}>
          {el.id}. {el.title}
        </div>
      ))}
    </div>
  )
}
