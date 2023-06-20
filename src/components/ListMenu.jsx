import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CropIcon from '@mui/icons-material/Crop';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import ContrastIcon from '@mui/icons-material/Contrast';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FilterBAndWIcon from '@mui/icons-material/FilterBAndW';

import { Image } from 'image-js';
import { DEFAULT_OPTIONS } from '../services/option';
import ListItemBar from './ListItem';
import Treshold from './Treshold';

const ListMenu = (props) => {
  const [open, setOpen] = useState(true);
  const { setMyimg, myimg, setCroping, setOptionIndex, optionIndex } =
    props;
  const handleClick = () => {
    setOpen(!open);
  };
  async function hanldeGray() {
    let image = await Image.load(myimg);
    let grey = image.grey();

    console.log('gray');
    return setMyimg(grey.toDataURL());
  }
  async function handleblur() {
    let image = await Image.load(myimg);
    let blur = image.blurFilter();

    console.log('blur');
    return setMyimg(blur.toDataURL());
  }
  console.log(optionIndex);
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <FilterBAndWIcon />
            </ListItemIcon>
            <ListItemText primary="Template" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  hanldeGray();
                }}>
                <ListItemIcon>
                  <ContrastIcon />
                </ListItemIcon>
                <ListItemText primary="Grayscale" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleblur({ number: 135 });
                }}>
                <ListItemIcon>
                  <BlurCircularIcon />
                </ListItemIcon>
                <ListItemText primary="Blur" />
              </ListItemButton>
              <Treshold setMyimg={setMyimg} />
            </List>
          </Collapse>
          {DEFAULT_OPTIONS.map((option, i) => {
            return (
              <ListItemBar
                name={option.name}
                key={i}
                index={i}
                handleClick={setOptionIndex}
                setOptionIndex={setOptionIndex}
                setCroping={setCroping}
                active={i === optionIndex}
              />
            );
          })}
        </List>
      </nav>
    </Box>
  );
};

export default ListMenu;
