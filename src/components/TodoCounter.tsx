import { Typography } from "@mui/joy";
interface TodoCounterProps {
    count: number;
}


const TodoCounter = ({count}: TodoCounterProps) => {
    return (
        <Typography level='h3' sx={{ marginBottom: '20px' }}>
        {count} tasks remaining{(count !==1) ? 's' : ''}
      </Typography>
    );
};

export default TodoCounter; 