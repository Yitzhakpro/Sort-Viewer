import "./listItem.css";

interface IListItemProps {
  number: number;
  maxNum: number;
  listLength: number;
  color?: React.CSSProperties["backgroundColor"];
}

function ListItem(props: IListItemProps): JSX.Element {
  const { number, maxNum, listLength, color = "#333" } = props;

  const heightPrecentage = (number * 100) / maxNum;
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
