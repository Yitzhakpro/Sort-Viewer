import { useState } from "react";
import {
  DEFAULT_RANDOM_ARRAY_LENGTH,
  DEFAULT_MIN_RANDOM_NUMBER,
  DEFAULT_MAX_RANDOM_NUMBER,
} from "../../constants";
import "./controlPanel.css";

interface IControlPanelProps {
  genNewList: (length?: number, min?: number, max?: number) => void;
}

function ControlPanel(props: IControlPanelProps): JSX.Element {
  const { genNewList } = props;

  const [length, setLength] = useState(DEFAULT_RANDOM_ARRAY_LENGTH);
  const [min, setMin] = useState(DEFAULT_MIN_RANDOM_NUMBER);
  const [max, setMax] = useState(DEFAULT_MAX_RANDOM_NUMBER);

  const handleGenNewList = (): void => {
    genNewList(length, min, max);
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

      <span>min</span>
      <input
        type="number"
        value={min}
        onChange={(e) => setMin(parseInt(e.target.value))}
      />

      <span>max</span>
      <input
        type="number"
        value={max}
        onChange={(e) => setMax(parseInt(e.target.value))}
      />
    </div>
  );
}

export default ControlPanel;
