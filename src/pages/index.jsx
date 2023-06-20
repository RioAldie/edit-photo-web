import {
  Box,
  Grid,
  Paper,
  styled,
  Slider,
  Typography,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { Image } from 'image-js';
import Crop from '../components/Crop';
import ListMenu from '../components/ListMenu';
import Filter from '../components/Filter';
import Edit from '../Edit';
import { DEFAULT_OPTIONS } from '../services/option';
import SlideBar from '../components/Slider';
import CropModal from '../components/CropModal';
import Reset from '../components/Reset';

const Home = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(1);
  const [myimg, setMyimg] = useState('/images/rs-rose.jpg');
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [croping, setCroping] = useState(false);
  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return {
      filter: filters.join(' '),
      // backgroundImage: 'url("../public/images/rs-rose.jpg")',
    };
  }
  console.log(selectedOptionIndex);
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        height: '100vh',
        p: '0',
      }}>
      <Grid container spacing={2}>
        {' '}
        <Grid item xs={6} md={4}>
          <ListMenu
            setMyimg={setMyimg}
            myimg={myimg}
            setCroping={setCroping}
            setOptionIndex={setSelectedOptionIndex}
            optionIndex={selectedOptionIndex}
          />
        </Grid>
        <Grid item xs={6} md={8}>
          <Box
            sx={{
              height: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#111111',
            }}>
            <img src={myimg} style={getImageStyle()} />
            <CropModal setMyimg={setMyimg} />
            <Reset />
          </Box>

          <SlideBar
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            value={selectedOption.value}
            handleChange={handleSliderChange}
          />
        </Grid>
        <Grid item xs={12} md={12}></Grid>
      </Grid>
    </Box>
  );
};

export default Home;
