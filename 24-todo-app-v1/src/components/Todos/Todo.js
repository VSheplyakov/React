import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';
// console.log(styles)

function Todo(props) {
  const { todo, index, deleteTodo } = props;
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
