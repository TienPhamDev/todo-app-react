import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        className={styles.checkbox}
      />
      <span className={styles.text}>{todo.text}</span>
      <button className={styles.editButton}>Edit</button>
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
}; 'react';
import './TodoItem.css';

const TodoItem = ({ todo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => {/* TODO: Toggle completion */}}
      />
      <span className="todo-text">{todo.text}</span>
      <button className="edit-btn">Edit</button>
      <button className="delete-btn">Delete</button>
    </div>
  );
};

export default TodoItem;
