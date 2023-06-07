import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function BasicModal({item, idDrink}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={`modal-modal-title-${idDrink}`}
        aria-describedby={`modal-modal-description-${idDrink}`}
      >
        <Box sx={style}>
          <Typography id={`modal-modal-title-${idDrink}`} variant="h6" component="h2">
    {item.strDrink}
          </Typography>
          <Typography id={`modal-modal-description-${idDrink}`} sx={{ mt: 2 }}>
    {item.strInstructions}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
