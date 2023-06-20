import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import Crop from './Crop';
import CropIcon from '@mui/icons-material/Crop';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CropModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { setMyimg } = props;
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          position: 'absolute',
          zIndex: '100',
          top: '80px',
          left: '300px',
        }}>
        {' '}
        <CropIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Crop setMyimg={setMyimg} />
        </Box>
      </Modal>
    </div>
  );
}
