import { nanoid } from "nanoid";
import ListItem from "../ListItem";
import type { SortStep } from "../../types";
import "./list.css";

interface IListProps {
  listState: SortStep<number>;
}

function List(props: IListProps): JSX.Element {
  const { listState } = props;

  const { array, colorMapping, permanentColorMapping } = listState;

  return (
    <div className="list">
      {array.map((number, index) => {
        return (
          <ListItem
            key={nanoid()}
            number={number}
            listLength={array.length}
            color={permanentColorMapping[index] || colorMapping[index]}
          />
        );
      })}
    </div>
  );
}

export default List;
