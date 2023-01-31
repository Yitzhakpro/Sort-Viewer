import { nanoid } from "nanoid";
import ListItem from "../ListItem";
import "./list.css";

interface IListProps {
  list: number[];
}

function List(props: IListProps): JSX.Element {
  const { list } = props;

  return (
    <div className="list">
      {list.map((number) => {
        return (
          <ListItem key={nanoid()} number={number} listLength={list.length} />
        );
      })}
    </div>
  );
}

export default List;
