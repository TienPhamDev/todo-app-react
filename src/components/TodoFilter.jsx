import React from 'react';
import './TodoFilter.css';

const TodoFilter = () => {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="todo-filter">
      {filters.map(filter => (
        <button 
          key={filter}
          className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
          onClick={() => {/* TODO: Set filter */}}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
