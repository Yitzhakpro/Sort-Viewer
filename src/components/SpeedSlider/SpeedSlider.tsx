import { Slider } from "../../utilComponents";

interface ISpeedSliderProps {
  value: number;
  onChange: (newValue: number) => void;
}

function SpeedSlider(props: ISpeedSliderProps): JSX.Element {
  const { value, onChange } = props;

  const handleChange = (_event: Event, newValue: number | number[]): void => {
    onChange(newValue as number);
  };

  return <Slider min={1} max={1000} value={value} onChange={handleChange} />;
}

export default SpeedSlider;
