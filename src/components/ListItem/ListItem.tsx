import { DEFAULT_MAX_RANDOM_NUMBER } from "../../constants";
import "./listItem.css";

interface IListItemProps {
  number: number;
  listLength: number;
  color?: React.CSSProperties["backgroundColor"];
}

function ListItem(props: IListItemProps): JSX.Element {
  const { number, listLength, color = "#333" } = props;

  const heightPrecentage = (number * 100) / DEFAULT_MAX_RANDOM_NUMBER;
  const widthPrecentage = (1 * 100) / listLength;

  return (
    <div
      className="list-item"
      style={{
        height: `${heightPrecentage}%`,
        width: `${widthPrecentage}%`,
      }}
    >
      <div className="list-item-color" style={{ backgroundColor: color }} />
    </div>
  );
}

export default ListItem;
