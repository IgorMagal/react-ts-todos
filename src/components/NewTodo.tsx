import { useContext, useRef } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "../store/TodosContext";

const NewTodo: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  const todoTxtInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTxt = todoTxtInputRef.current?.value;

    if (enteredTxt?.trim().length === 0) {
      console.log("Cannot submit an empty text.");
      return;
    }

    todosCtx.addItem(enteredTxt!);
    todoTxtInputRef.current!.value = "";
    console.log("text from NewTodo Component: " + enteredTxt);
  };

  return (
    <form className={styles.form}>
      <label htmlFor="todoText">Todo text: </label>
      <input type="text" id="todoText" ref={todoTxtInputRef} />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default NewTodo;
