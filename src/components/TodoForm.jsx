import React from 'react';
import styles from './TodoForm.module.css';

const TodoForm = () => {
  return (
    <form className={styles.form}>
      <input 
        type="text" 
        placeholder="Add a new todo..." 
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
