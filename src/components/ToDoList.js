import React, { useState, useEffect, useRef } from 'react';
import useScroll from '../hooks/useScroll';

export default function ToDoList() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const limit = 10
  const parentRef = useRef()
  const childRef = useRef()
  useScroll(parentRef, childRef, () => fetchTodos(limit, page))
  
  function fetchTodos(limitTodos, pageNumber) {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${limitTodos}&_page=${pageNumber}`)
    .then(response => response.json())
    .then(json => {
      setList(prev => [...prev, ...json])
      setPage(prev => prev + 1)
      setLoading(false)
    })
  }
  
  return (
    <div ref={parentRef} style={{padding: 25, height: 500, overflow: 'hidden', overflowY: 'auto'}}>
      {!!list.length && list.map(el => (
        <div key={el.id} style={{padding: 10, border: '2px solid #000'}}>
          {el.id}. {el.title}
        </div>
      ))}
      {isLoading && <h2>Loading...</h2>}
      <div ref={childRef} style={{height: 5, backgroundColor: 'red'}}></div>
    </div>
  )
}
