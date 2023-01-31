import { DEFAULT_MAX_RANDOM_NUMBER } from "../../constants";
import { isMobileScreen } from "../../utils";
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

  const shouldDisplayNumber = !isMobileScreen() && listLength < 25;

  return (
    <div
      className="list-item"
      style={{
        height: `${heightPrecentage}%`,
        width: `${widthPrecentage}%`,
      }}
    >
      <div className="list-item-color" style={{ backgroundColor: color }}>
        {shouldDisplayNumber && <p className="list-item-number">{number}</p>}
      </div>
    </div>
  );
}

export default ListItem;
