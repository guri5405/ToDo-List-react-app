import React, { useState } from 'react';

const ToDoItem = ({ todo, onToggleComplete, onDeleteTodo, onEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSaveEdit = () => {
    onEditTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
          onBlur={handleSaveEdit} // Save on blur
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={() => onToggleComplete(todo.id)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default ToDoItem;
