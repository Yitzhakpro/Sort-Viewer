import React from 'react';
import { Slider as MUISlider, type SliderProps } from '@mui/material';

function Slider(props: SliderProps): JSX.Element {
	return <MUISlider {...props} />;
}

export default Slider;
