import { useState } from "react";
import { DEFAULT_RANDOM_ARRAY_LENGTH } from "../../constants";
import "./controlPanel.css";

interface IControlPanelProps {
  genNewList: (length?: number, min?: number, max?: number) => void;
}

function ControlPanel(props: IControlPanelProps): JSX.Element {
  const { genNewList } = props;

  const [length, setLength] = useState(DEFAULT_RANDOM_ARRAY_LENGTH);

  const handleGenNewList = (): void => {
    genNewList(length);
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
    </div>
  );
}

export default ControlPanel;
