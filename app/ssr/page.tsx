export const revalidate = 3600 // In sostanza React controlla in questo tempo se il codice si è aggiornato con nuovi dati

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()
  return data
}

let minutes = revalidate / 60

export default async function Ssr() {
  const todos = await fetchTodos()
  return (
    <main>
      <h1>SSR (Server Side Rendering)</h1>
      <p>Check every: {revalidate} secs // {minutes} minutes</p>
      <h3 className="alert">Set the network speed to 3G and test it!</h3>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.id} - {todo.title}</p>
      ))}
    </main>
  )
}