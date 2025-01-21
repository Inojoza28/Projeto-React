import React from 'react';

// Props:
// - todo: objeto com as informações da tarefa
// - toggleComplete: função para alternar o status da tarefa
// - removeTodo: função para remover a tarefa da lista
const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="todo-label">
        {/* 
          Checkbox customizado:
          - O atributo 'checked' reflete o status da tarefa.
          - O 'onChange' dispara a função toggleComplete com o id da tarefa.
        */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="todo-checkbox"
        />
        {/* Elemento que servirá para customização visual do checkbox */}
        <span className="checkbox-custom" />
        <span className="todo-text">{todo.text}</span>
      </label>

      {/* Botão para remover a tarefa */}
      <div className="actions">
        <button onClick={() => removeTodo(todo.id)}>Remover</button>
      </div>
    </li>
  );
};

export default TodoItem;
