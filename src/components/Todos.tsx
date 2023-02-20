import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
import { TodosContext } from "../store/TodosContext";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((i) => (
        <TodoItem
          key={i.id}
          title={i.title}
          onRemoveTodo={todosCtx.removeItem.bind(null, i.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
