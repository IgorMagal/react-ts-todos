import React, { useState } from "react";
import Todo from "../models/Todo";

type todosCtxObj = {
  items: Todo[];
  addItem: (text: string) => void;
  removeItem: (id: string) => void;
};

export const TodosContext = React.createContext<todosCtxObj>({
  items: [],
  addItem: () => {},
  removeItem: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoTxt: string) => {
    console.log(todoTxt + " from App Component");
    setTodos([...todos, new Todo(todoTxt, todoTxt, false)]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: todosCtxObj = {
    items: todos,
    addItem: addTodoHandler,
    removeItem: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
