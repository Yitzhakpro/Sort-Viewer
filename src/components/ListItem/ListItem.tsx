import "./listItem.css";

interface IListItemProps {
  number: number;
  maxNum: number;
}

function ListItem(props: IListItemProps): JSX.Element {
  const { number, maxNum } = props;

  const heightPrecentage = (number * 100) / maxNum;

  return (
    <div className="list-item" style={{ height: `${heightPrecentage}%` }}>
      {number}
    </div>
  );
}

export default ListItem;
