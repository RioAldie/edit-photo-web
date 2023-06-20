import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Reset = () => {
  return (
    <Button
      variant="contained"
      sx={{
        position: 'absolute',
        top: '80px',
        left: '920px',
      }}>
      <RestartAltIcon />
    </Button>
  );
};

export default Reset;
