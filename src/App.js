import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'lala', completed: true },

];

function App() {
  const [todos,setTodos]= React.useState(defaultTodos);
  const [searchValue,setSerachValue]=React.useState();
  useState('');
  console.log(`los usuarios buscan todos de ${searchValue}`)  
  
  const completedTodos=todos.filter(todos=>!!todos.completed).length;
  const totalTodos=todos.length;
  
  return (
    <>
    
      <TodoCounter completed={completedTodos}
       total={totalTodos} />
      <TodoSearch 
      searchValue={searchValue}
      setSerachValue={setSerachValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
