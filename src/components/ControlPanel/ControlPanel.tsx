import { useState } from "react";
import "./controlPanel.css";

interface IControlPanelProps {
  genNewList: (length?: number, min?: number, max?: number) => void;
}

function ControlPanel(props: IControlPanelProps): JSX.Element {
  const { genNewList } = props;

  const [length, setLength] = useState(5);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

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
