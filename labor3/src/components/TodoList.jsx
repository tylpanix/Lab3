import { useState, useCallback, useMemo } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = useCallback((newTask) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text: newTask.trim() }
    ])
  }, [])

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }, [])

  const memoizedTodos = useMemo(() => todos, [todos])

  return (
    <div className="todo-list">
      <AddTodoForm onAddTodo={addTodo} />
      {memoizedTodos.map(todo => (
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
