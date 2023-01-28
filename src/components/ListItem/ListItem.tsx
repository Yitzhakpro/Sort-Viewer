import "./listItem.css";

interface IListItemProps {
  number: number;
  maxNum: number;
  listLength: number;
}

function ListItem(props: IListItemProps): JSX.Element {
  const { number, maxNum, listLength } = props;

  const heightPrecentage = (number * 100) / maxNum;
  const widthPrecentage = (1 * 100) / listLength;

  return (
    <div
      className="list-item"
      style={{ height: `${heightPrecentage}%`, width: `${widthPrecentage}%` }}
    />
  );
}

export default ListItem;
