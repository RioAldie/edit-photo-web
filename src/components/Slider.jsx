import { Slider } from '@mui/material';

export default function SlideBar({ min, max, value, handleChange }) {
  return (
    <div className="slider-container">
      <Slider
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
