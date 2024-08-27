import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onToggleComplete, onDeleteTodo, onEditTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
