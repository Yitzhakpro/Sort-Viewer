import { useState } from "react";
import { Typography } from "@mui/material";
import ArraySizeSlider from "../ArraySizeSlider";
import SpeedSlider from "../SpeedSlider";
import {
  DEFAULT_RANDOM_ARRAY_LENGTH,
  DEFAULT_SORT_SPEED,
} from "../../constants";
import type { SortAlgorithm } from "../../types";
import "./controlPanel.css";

interface IControlPanelProps {
  stepsCount: number;
  stepIndex: number;
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
    genNewList,
    performSort,
    stopSort,
    prevStep,
    nextStep,
  } = props;

  const [length, setLength] = useState(DEFAULT_RANDOM_ARRAY_LENGTH);
  const [speed, setSpeed] = useState(DEFAULT_SORT_SPEED);

  const [algorithm, setAlgorithm] = useState<SortAlgorithm | "">("");

  const isBackDisabled = stepIndex < 1;
  const isNextDisabled = stepIndex === stepsCount - 1;

  const handleGenNewList = (): void => {
    genNewList(length);
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
      <button onClick={handleGenNewList}>generate new list</button>

      <div className="control-panel-section">
        <Typography className="control-panel-section-title">length</Typography>
        <ArraySizeSlider value={length} onChange={handleLengthChange} />
      </div>

      <div className="control-panel-section">
        <Typography className="control-panel-section-title">speed</Typography>
        <SpeedSlider value={speed} onChange={handleSpeedChange} />
      </div>

      <button onClick={() => setAlgorithm("bubbleSort")}>bubbleSort</button>
      <button onClick={() => setAlgorithm("mergeSort")}>mergeSort</button>
      <button onClick={() => setAlgorithm("quickSort")}>quickSort</button>

      <button onClick={handleStartSort}>Start Sort</button>
      <button onClick={handleStopSort}>Stop Sort</button>

      <div>
        <button disabled={isBackDisabled} onClick={prevStep}>
          back
        </button>
        <button disabled={isNextDisabled} onClick={nextStep}>
          next
        </button>
      </div>
    </div>
  );
}

export default ControlPanel;
