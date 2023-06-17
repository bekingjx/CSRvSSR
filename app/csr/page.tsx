"use client"

import { useState, useEffect } from "react"

export default function Csr() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

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
      <h1>CSR (Client Side Rendering)</h1>
      <h3 className="alert">Set the network speed to 3G and test it!</h3>
      {data.map((todo) => 
        <p key={todo['id']}>{todo.title}</p> )}
    </main>
  )
}