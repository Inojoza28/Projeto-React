import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <TodoList />
      <Footer /> 
    </div>
  );
}

export default App;
