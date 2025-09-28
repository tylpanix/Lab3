import { useState } from 'react'

const TodoItem = ({ id, task, onDelete }) => {
  const [completed, setCompleted] = useState(false)

  const toggleCompleted = () => {
    setCompleted(prev => !prev)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleCompleted}
          className="checkbox"
        />
        <span className="task-text">{task}</span>
      </div>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
    </div>
  )
}

export default TodoItem