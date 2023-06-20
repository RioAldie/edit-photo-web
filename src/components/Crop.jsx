import { Box, Button, Slider, Typography } from '@mui/material';
import { useState } from 'react';
import { Image } from 'image-js';

const Crop = (props) => {
  const { setMyimg } = props;
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  async function handleCrop() {
    let image = await Image.load('/images/rs-rose.jpg');
    let grey = image.crop({ x: w, y: h });
    return setMyimg(grey.toDataURL());
  }

  return (
    <Box>
      <Typography gutterBottom>X</Typography>
      <Slider
        defaultValue={w}
        onChange={(e) => setW(e.target.value)}
        aria-label="Default"
        valueLabelDisplay="auto"
        min={0}
        max={500}
      />
      <Typography gutterBottom>Y</Typography>
      <Slider
        defaultValue={h}
        onChange={(e) => setH(e.target.value)}
        aria-label="Default"
        valueLabelDisplay="auto"
        min={0}
        max={500}
      />
      <Button variant="contained" onClick={() => handleCrop()}>
        Submit
      </Button>
    </Box>
  );
};

export default Crop;
