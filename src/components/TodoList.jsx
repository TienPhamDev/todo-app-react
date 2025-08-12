import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = () => {
  // Placeholder todos for display
  const todos = [
    { id: 1, text: 'Sample todo 1', completed: false },
    { id: 2, text: 'Sample todo 2', completed: true },
  ];

  return (
    <div className={styles.todoList}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
