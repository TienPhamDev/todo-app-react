import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to Todo App</h1>
      <p className={styles.description}>
        Organize your tasks and stay productive!
      </p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>Add Tasks</h3>
          <p>Create new todos to keep track of your work</p>
        </div>
        <div className={styles.feature}>
          <h3>Mark Complete</h3>
          <p>Check off completed tasks</p>
        </div>
        <div className={styles.feature}>
          <h3>Filter & Organize</h3>
          <p>View all, active, or completed tasks</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
