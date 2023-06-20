import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ContrastIcon from '@mui/icons-material/Contrast';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import GradientIcon from '@mui/icons-material/Gradient';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import LensBlurIcon from '@mui/icons-material/LensBlur';
const ListItemBar = ({
  name,
  active,
  handleClick,
  setCroping,
  index,
  setOptionIndex,
}) => {
  const handleSelect = () => {
    handleClick();
    setCroping(false);
    setOptionIndex(index);
    console.log('click');
  };
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => handleSelect()}
        className={`sidebar-item ${active ? 'active' : ''}`}>
        <ListItemIcon>
          {name === 'Saturation' && <BlurLinearIcon />}
          {name === 'Brightness' && <BrightnessMediumIcon />}
          {name === 'Grayscale' && <GradientIcon />}
          {name === 'Hue Rotate' && <AutoGraphIcon />}
          {name === 'Contrast' && <ContrastIcon />}
          {name === 'Sepia' && <GraphicEqIcon />}
          {name === 'Blur' && <LensBlurIcon />}
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemBar;
