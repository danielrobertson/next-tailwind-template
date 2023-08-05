"use client";

import React from "react";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId?: number;
}

export function TodoItem({ id, todo, completed: completedProp, userId }: Todo) {
  const [completed, setCompleted] = React.useState(completedProp);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(event.target.checked);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        id={`${id}`}
        type="checkbox"
        checked={completed}
        onChange={handleOnChange}
        className="peer w-4 h-4 text-blue-600 rounded"
      />
      <label
        htmlFor={`${id}`}
        className="ml-2 font-medium peer-checked:line-through peer-checked:text-gray-500 transition-all"
      >
        {todo}
      </label>
    </div>
  );
}
