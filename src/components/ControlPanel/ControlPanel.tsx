import { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import {
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Button } from "../../utilComponents";
import ArraySizeSlider from "../ArraySizeSlider";
import SpeedSlider from "../SpeedSlider";
import {
  DEFAULT_RANDOM_ARRAY_LENGTH,
  DEFAULT_SORT_SPEED,
  LABLED_ALGORITHMS,
} from "../../constants";
import type { SortAlgorithm } from "../../types";
import "./controlPanel.css";

interface IControlPanelProps {
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

  const [algorithm, setAlgorithm] = useState<SortAlgorithm>("quickSort");

  const isRunDisabled = isSorting;
  const isStopDisabled = !isSorting;
  const isBackDisabled = isSorting || stepIndex < 1;
  const isNextDisabled = isSorting || stepIndex === stepsCount - 1;

  const handleGenNewList = (): void => {
    genNewList(length);
  };

  const handleChangeAlgorithm = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: SortAlgorithm
  ): void => {
    if (!value) {
      return;
    }

    setAlgorithm(value);
  };

  const handleLengthChange = (value: number): void => {
    setLength(value);
    genNewList(value);
  };

  const handleSpeedChange = (value: number): void => {
    setSpeed(value);
  };

  const handleStartSort = async (): Promise<void> => {
    if (!algorithm) {
      return;
    }

    const delay = Math.abs(speed - 999);
    await performSort(algorithm, delay);
  };

  const handleStopSort = (): void => {
    stopSort();
  };

  return (
    <div className="control-panel">
      <div className="control-panel-section sort-buttons">
        <Button
          startIcon={<AutorenewIcon />}
          variant="contained"
          size="small"
          onClick={handleGenNewList}
        >
          Re-Generate List
        </Button>

        <ToggleButtonGroup
          color="primary"
          size="small"
          exclusive
          value={algorithm}
          onChange={handleChangeAlgorithm}
        >
          {LABLED_ALGORITHMS.map((labledAlgo) => {
            return (
              <ToggleButton key={labledAlgo.value} value={labledAlgo.value}>
                {labledAlgo.label}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>

        <ButtonGroup variant="contained">
          <Button size="small" disabled={isBackDisabled} onClick={prevStep}>
            Back
          </Button>
          <Button disabled={isRunDisabled} onClick={handleStartSort}>
            <PlayArrowIcon />
          </Button>
          <Button disabled={isStopDisabled} onClick={handleStopSort}>
            <StopIcon />
          </Button>
          <Button size="small" disabled={isNextDisabled} onClick={nextStep}>
            Next
          </Button>
        </ButtonGroup>
      </div>

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
