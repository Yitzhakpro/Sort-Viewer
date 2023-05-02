import React from 'react';
import { ToggleButton, ToggleButtonGroup, Select, MenuItem, useMediaQuery } from '@mui/material';
import { LABLED_ALGORITHMS } from '../../constants';
import type { SortAlgorithm } from '../../types';

interface IAlgorithmSelectorProps {
	algorithm: SortAlgorithm;
	onAlgorithmChange: (value: SortAlgorithm) => void;
}

function AlgorithmSelector(props: IAlgorithmSelectorProps): JSX.Element {
	const { algorithm, onAlgorithmChange } = props;

	const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

	return isMobile ? (
		<Select
			label="Algorithm"
			variant="standard"
			fullWidth
			value={algorithm}
			onChange={(event) => {
				onAlgorithmChange(event.target.value as SortAlgorithm);
			}}
		>
			{LABLED_ALGORITHMS.map((labledAlgo) => {
				return (
					<MenuItem key={labledAlgo.value} value={labledAlgo.value}>
						{labledAlgo.label}
					</MenuItem>
				);
			})}
		</Select>
	) : (
		<ToggleButtonGroup
			color="primary"
			size="small"
			exclusive
			value={algorithm}
			onChange={(_event, value) => {
				onAlgorithmChange(value);
			}}
		>
			{LABLED_ALGORITHMS.map((labledAlgo) => {
				return (
					<ToggleButton key={labledAlgo.value} value={labledAlgo.value} size="small">
						{labledAlgo.label}
					</ToggleButton>
				);
			})}
		</ToggleButtonGroup>
	);
}

export default AlgorithmSelector;
