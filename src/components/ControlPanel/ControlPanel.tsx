/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { ButtonGroup, Stack, Select, Typography, useMediaQuery, MenuItem } from '@mui/material';
import {
	DEFAULT_RANDOM_ARRAY_LENGTH,
	DEFAULT_SORT_SPEED,
	LABLED_ALGORITHMS,
} from '../../constants';
import { Button } from '../../utilComponents';
import ArraySizeSlider from '../ArraySizeSlider';
import SpeedSlider from '../SpeedSlider';
import type { SortAlgorithm } from '../../types';
import type { SelectChangeEvent } from '@mui/material';
import './controlPanel.css';

export interface IControlPanelProps {
	stepsCount: number;
	stepIndex: number;
	isSorting: boolean;
	genNewList: (length?: number, min?: number, max?: number) => void;
	performSort: (sortAlgorithm: SortAlgorithm, delay?: number) => Promise<void>;
	stopSort: () => void;
	prevStep: () => void;
	nextStep: () => void;
}

function ControlPanel(props: IControlPanelProps): JSX.Element {
	const {
		stepsCount,
		stepIndex,
		isSorting,
		genNewList,
		performSort,
		stopSort,
		prevStep,
		nextStep,
	} = props;

	const [length, setLength] = useState(DEFAULT_RANDOM_ARRAY_LENGTH);
	const [speed, setSpeed] = useState(DEFAULT_SORT_SPEED);

	const [algorithm, setAlgorithm] = useState<SortAlgorithm>('quickSort');

	const isRunDisabled = isSorting;
	const isStopDisabled = !isSorting;
	const isBackDisabled = isSorting || stepIndex < 1;
	const isNextDisabled = isSorting || stepIndex === stepsCount - 1;

	const isFullWidthControls = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

	const handleGenNewList = (): void => {
		genNewList(length);
	};

	const handleChangeAlgorithm = (event: SelectChangeEvent<SortAlgorithm>): void => {
		setAlgorithm(event.target.value as SortAlgorithm);
	};

	const handleLengthChange = (value: number): void => {
		setLength(value);
		genNewList(value);
	};

	const handleSpeedChange = (value: number): void => {
		setSpeed(value);
	};

	const handleStartSort = async (): Promise<void> => {
		const delay = Math.abs(speed - 999);
		await performSort(algorithm, delay);
	};

	const handleStopSort = (): void => {
		stopSort();
	};

	return (
		<div className="control-panel">
			<Stack
				justifyContent="center"
				alignItems="center"
				direction={{ xs: 'column', md: 'row' }}
				spacing={{ xs: 1, md: 6 }}
			>
				<Button
					startIcon={<AutorenewIcon />}
					variant="contained"
					size="small"
					fullWidth={isFullWidthControls}
					onClick={handleGenNewList}
				>
					Re-Generate List
				</Button>

				<Select
					label="Algorithm"
					variant="standard"
					fullWidth={isFullWidthControls}
					value={algorithm}
					onChange={handleChangeAlgorithm}
				>
					{LABLED_ALGORITHMS.map((labledAlgo) => {
						return (
							<MenuItem key={labledAlgo.value} value={labledAlgo.value}>
								{labledAlgo.label}
							</MenuItem>
						);
					})}
				</Select>

				<ButtonGroup variant="contained" fullWidth={isFullWidthControls}>
					<Button
						data-testid="back-button"
						size="small"
						disabled={isBackDisabled}
						onClick={prevStep}
					>
						Back
					</Button>
					<Button data-testid="run-button" disabled={isRunDisabled} onClick={handleStartSort}>
						<PlayArrowIcon />
					</Button>
					<Button data-testid="stop-button" disabled={isStopDisabled} onClick={handleStopSort}>
						<StopIcon />
					</Button>
					<Button
						data-testid="next-button"
						size="small"
						disabled={isNextDisabled}
						onClick={nextStep}
					>
						Next
					</Button>
				</ButtonGroup>
			</Stack>

			<div className="control-panel-section">
				<Typography className="control-panel-section-title">Length</Typography>
				<ArraySizeSlider value={length} onChange={handleLengthChange} />
			</div>

			<div className="control-panel-section">
				<Typography className="control-panel-section-title">Speed</Typography>
				<SpeedSlider value={speed} onChange={handleSpeedChange} />
			</div>
		</div>
	);
}

export default ControlPanel;
