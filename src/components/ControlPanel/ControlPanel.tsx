import { useState } from "react";
import { DEFAULT_RANDOM_ARRAY_LENGTH } from "../../constants";
import type { SortAlgorithm } from "../../types";
import "./controlPanel.css";

interface IControlPanelProps {
  genNewList: (length?: number, min?: number, max?: number) => void;
  performSort: (sortAlgorithm: SortAlgorithm, speed?: number) => Promise<void>;
  stopSort: () => void;
}

function ControlPanel(props: IControlPanelProps): JSX.Element {
  const { genNewList, performSort, stopSort } = props;

  const [length, setLength] = useState(DEFAULT_RANDOM_ARRAY_LENGTH);

  const [algorithm, setAlgorithm] = useState<SortAlgorithm | "">("");

  const handleGenNewList = (): void => {
    genNewList(length);
  };

  const handleStartSort = async (): Promise<void> => {
    if (!algorithm) {
      return;
    }

    await performSort(algorithm);
  };

  const handleStopSort = (): void => {
    stopSort();
  };

  return (
    <div className="control-panel">
      <button onClick={handleGenNewList}>generate new list</button>

      <span>length</span>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
      />

      <button onClick={() => setAlgorithm("bubbleSort")}>bubbleSort</button>

      <button onClick={handleStartSort}>Start Sort</button>
      <button onClick={handleStopSort}>Stop Sort</button>
    </div>
  );
}

export default ControlPanel;
