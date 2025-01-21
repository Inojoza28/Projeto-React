import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  // Estados: lista de tarefas, valor do input e filtro ativo
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  // Função para adicionar uma nova tarefa
  const addTodo = (e) => {
    e.preventDefault(); // Evita o recarregamento da página ao enviar o form
    if (!input.trim()) return; // Não adiciona se o input estiver vazio

    // Cria um novo objeto de tarefa com id único, texto e status 'completed' como false
    const newTodo = { id: Date.now(), text: input, completed: false };
    setTodos([newTodo, ...todos]); // Adiciona a nova tarefa no início do array
    setInput(''); // Limpa o campo de entrada
  };

  // Função para alternar o status da tarefa (concluída/pendente)
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Função para remover uma tarefa
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Função para retornar as tarefas de acordo com o filtro ativo:
  // 'all' retorna todas, 'completed' as conclúidas e 'pending' as não concluídas
  const filterTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'pending':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <section className="todo-section">
      {/* Formulário para adicionar nova tarefa */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* Botões de filtro para selecionar quais tarefas serão exibidas */}
      <div className="filter-buttons">
        <button
          type="button"
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')} >
          Todas
        </button>
        <button
          type="button"
          className={filter === 'pending' ? 'active' : ''}
          onClick={() => setFilter('pending')} >
          Pendentes
        </button>
        <button
          type="button"
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')} >
          Concluídas
        </button>
      </div>

      {/* Renderiza a lista de tarefas filtradas */}
      <ul className="todo-list">
        {filterTodos().map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
