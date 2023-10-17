import React, { useState } from 'react';
import { TodoItem } from './todo.model';
import { Box, Button, Checkbox } from '@mui/material';
import { Input, ButtonGroup } from '@mui/joy';

interface TodoProps {
    todo: TodoItem;
    deleteTodo: () => void;
    statusTodo: () => void;
}

function Todo({ todo, deleteTodo, statusTodo }: TodoProps) {
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState('');

    function editTodo(title: string) {
        setEdit(true);
        setValue(title);
    }
    function cancelTodo() {
        setEdit(false);
    }

    function saveTodo() {
        setEdit(false);
        todo.title = value;
    }
    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

  
    return (
        <Box>
            {edit ? (
                <Box margin='5px 0' >
                    <Input value={value} onChange={changeInput} size='sm' color='primary' />
                    <ButtonGroup  sx={{ display: 'flex', gap: 1 }}>
                        <Button  onClick={cancelTodo}>Cancel</Button>
                        <Button onClick={saveTodo}>Save</Button>
                    </ButtonGroup>
                </Box>
            ) : (
                <Box>
                    <Checkbox onChange={statusTodo} checked={todo.completed}/>
                    <span style={{ fontSize: '20px', marginLeft: '5px' }}>{todo.title}</span>
                    <ButtonGroup sx={{ display: 'flex', gap: 1 }}>
                        <Button onClick={() => editTodo(todo.title)}>Edit</Button>
                        <Button onClick={deleteTodo} color='error'>
                            Delete
                        </Button>
                    </ButtonGroup>
                </Box>
            )}
        </Box>
    );
}

export default Todo;
