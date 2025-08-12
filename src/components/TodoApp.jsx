import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import styles from './TodoApp.module.css';

const TodoApp = () => {
  return (
    <div className={styles.todoApp}>
      <h1 className={styles.title}>Todo App</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
};

export default TodoApp;
