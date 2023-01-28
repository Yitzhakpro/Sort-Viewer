import ListItem from "../ListItem";
import "./list.css";

interface IListProps {
  list: number[];
  maxNum: number;
}

function List(props: IListProps): JSX.Element {
  const { list, maxNum } = props;

  return (
    <div className="list">
      {list.map((number) => {
        return (
          <ListItem number={number} maxNum={maxNum} listLength={list.length} />
        );
      })}
    </div>
  );
}

export default List;
