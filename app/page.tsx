import { Todo, TodoItem } from "@/components/TodoItem";
import Link from "next/link";

async function getTodos(): Promise<Todo[]> {
  const response = await fetch("https://dummyjson.com/todos");
  const { todos } = await response.json();
  return todos;
}

export default async function Home() {
  const todos = await getTodos();

  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      cache: "no-cache",
    }
  );
  const { datetime } = await response.json();

  return (
    <main className="container mx-auto p-16">
      <h1 className="mb-3 text-4xl font-bold">Todos</h1>
      <Link
        href="/new"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      >
        Add
      </Link>
      <h2 className="mt-3">
        Example of no-cache server function, current time Chicago: {datetime}
      </h2>
      <ul className="mt-5">
        {todos.map((todo) => (
          <li key={todo.id} className="my-1 p-2">
            <TodoItem {...todo} />
          </li>
        ))}
      </ul>
    </main>
  );
}
