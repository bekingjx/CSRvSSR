const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()
  return data
}

export default async function Static() {
  const todos = await fetchTodos()
  return (
    <main>
    <h1>SSG (Statically Site Generated)</h1>
    <h3 className="alert">Set the network speed to 3G and test it!</h3>
    {todos.map((todo) => (
      <p>{todo.id} - {todo.title}</p>
    ))}
  </main>
  )
}