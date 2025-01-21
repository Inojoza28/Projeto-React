// src/components/Header.jsx
import React from 'react';

// (arrow function)
const Header = () => {
  return (
    <header className="header">
      <h1>Minha <span className='ToColor'>To</span>-<span className='DoColor'>Do</span> List</h1>
      <p>Organize suas tarefas com estilo!</p>
    </header>
  );
};

export default Header;
