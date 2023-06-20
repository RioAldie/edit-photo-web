import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { Image } from 'image-js';
const options = {
  lowThreshold: 50,
  highThreshold: 100,
  gaussianBlur: 1.1,
};
const Treshold = ({ setMyimg }) => {
  async function handleCrop() {
    let image = await Image.load('/images/rs-rose.jpg');
    let yellow = image.grey({ algorithm: 'black' });
    let result = yellow.mask();
    return setMyimg(result.toDataURL());
  }
  return (
    <ListItemButton
      sx={{ pl: 4 }}
      onClick={() => {
        handleCrop();
      }}>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="Treshold" />
    </ListItemButton>
  );
};

export default Treshold;
