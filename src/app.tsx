import {SApp, SHeader} from "./assets/styles/app.styles";
import TodoList from './components/TodoList';
import TodoCounter from './components/TodoCounter';
import { useEffect, useState } from 'react';
import { FilterType, TodoItem } from './components/todo.model';
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";

const getLocaleStorage = () => {
   let list = localStorage.getItem('todo list');
   if (list) {
     return JSON.parse(list); 
   } else {
     return [] as TodoItem[];
   }
 };

function App() {
 
const [todos, setTodos] = useState<TodoItem[]>(getLocaleStorage())
const [filtered, setFiltered] = useState<FilterType>('all')

useEffect(() => {
   localStorage.setItem('todo list', JSON.stringify(todos));
 }, [todos]);

function todoFilter(todos: TodoItem[], filtered: FilterType) {
   if(filtered === 'all') {
      return todos
   }
   if(filtered === 'active') {
      return todos.filter(todo => !todo.completed)
   }
   if(filtered === 'completed') {
      return todos.filter(todo => todo.completed)
   }
   throw new Error('Filter error')
}

    return (
        <SApp>
            <SHeader>
            <h1>Todo List</h1>
            <TodoAdd todos={todos} setTodos={setTodos}/>
            <TodoFilter setFiltered={setFiltered}/>
            <TodoCounter count={todos.length}/>
            <TodoList todos={todoFilter(todos, filtered)} setTodos={setTodos}/>
            </SHeader>
        </SApp>
    );
}

export default App;
