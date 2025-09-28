import { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (newTask) => {
    if (newTask.trim()) {
      const newTodo = {
        id: Date.now(),
        text: newTask.trim()
      }
      setTodos(prev => [...prev, newTodo])
    }
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo-list">
      <AddTodoForm onAddTodo={addTodo} />
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          id={todo.id}
          task={todo.text}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList