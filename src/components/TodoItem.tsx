import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ title: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={styles.item} onClick={props.onRemoveTodo}>
      {props.title}
    </li>
  );
};

export default TodoItem;
