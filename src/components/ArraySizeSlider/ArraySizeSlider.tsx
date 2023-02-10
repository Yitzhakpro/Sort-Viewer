import { Slider } from "../../utilComponents";

interface IArraySizeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

function ArraySizeSlider(props: IArraySizeSliderProps): JSX.Element {
  const { value, onChange } = props;

  const handleChange = (_event: Event, newValue: number | number[]): void => {
    onChange(newValue as number);
  };

  return <Slider min={1} max={100} value={value} onChange={handleChange} />;
}

export default ArraySizeSlider;
