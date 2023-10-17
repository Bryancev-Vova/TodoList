import { Button, ToggleButtonGroup } from '@mui/joy';
import React, { useState } from 'react';

interface ItodoFilterProps {
    setFiltered: any;
}

const TodoFilter = ({ setFiltered }: ItodoFilterProps) => {
    const [value, setValue] = useState<string | null>('default');

    return (
        <div>
            <ToggleButtonGroup
                sx={{ margin: '20px 0' }}
                spacing={1}
                color='primary'
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <Button value='default' onClick={() => setFiltered('all')}>
                    Show All tasks
                </Button>
                <Button value='active' onClick={() => setFiltered('active')}>
                    Show active tasks
                </Button>
                <Button value='completed' onClick={() => setFiltered('completed')}>
                    Show Completed tasks
                </Button>
            </ToggleButtonGroup>
        </div>
    );
};

export default TodoFilter;
