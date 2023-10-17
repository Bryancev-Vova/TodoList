import Todo from './Todo';
import { TodoItem } from './todo.model';

interface TodoListProps {
    todos: TodoItem[];
    setTodos: (arg: TodoItem[]) => void;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
    
    function handleDelete(id: string) {
        const newTodos = [...todos].filter(todo => todo.id != id);
        setTodos(newTodos);
    }

    function handleStatus(id: string) {
        const newTodos = [...todos].filter(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(newTodos);
    }
    return (
        <div>
            {todos.map(todo => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    deleteTodo={() => handleDelete(todo.id)}
                    statusTodo={() => handleStatus(todo.id)}
                />
            ))}
        </div>
    );
};

export default TodoList;
