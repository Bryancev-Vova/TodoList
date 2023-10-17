import React, { useState } from 'react';
import { Box, Button, Input } from '@mui/joy';
import { TodoItem } from './todo.model';
import '@fontsource/inter';
interface AddTodoProps {
    todos: TodoItem[];
    setTodos: (arg: TodoItem[]) => void;
}

const TodoAdd = ({ todos, setTodos }: AddTodoProps) => {
    const [value, setValue] = useState('');
    const { v4: uuidv4 } = require('uuid');

    function addTodo() {
        if(value) {
            setTodos([
                ...todos,
                {
                    id: uuidv4(),
                    title: value,
                    completed: false,
                },
            ]);
            setValue('');
        }
    
    }
    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <Box display='flex' justifyContent='space-between'>
            <Input
                sx={{ width: '450px', marginRight: '10px' }}
                color='primary'
                variant='outlined'
                placeholder='New todo...'
                value={value}
                onChange={changeInput}
            />
            <Button  onClick={addTodo} variant="outlined">Add</Button>
        </Box>
    );
};

export default TodoAdd;
