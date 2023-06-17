"use client"

import { useState, useEffect } from "react"

export const metadata = {
  title: 'CSR',
  description: 'Client Side Rendering',
}

export default function Csr() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  interface Todo {
    id: number;
    title: string;
    // Aggiungi qui altre proprietà se necessario
  }

  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })

    {/*const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()
      setData(data)
      setLoading(false)
    }

  fetchTodos()*/}


  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <main>
      <h1>{metadata.title} ({metadata.description})</h1>
      <h3 className="alert">Set the network speed to 3G and test it!</h3>
      {data.map((todo:Todo) => 
        <p key={todo.id}>{todo.title}</p> )}
    </main>
  )
}