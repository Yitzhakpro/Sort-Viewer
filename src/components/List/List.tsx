import { nanoid } from "nanoid";
import { COLOR_SORTING_MAPPING } from "../../constants";
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
        const itemColor =
          COLOR_SORTING_MAPPING[
            permanentColorMapping[index] || colorMapping[index]
          ];

        return (
          <ListItem
            key={nanoid()}
            number={number}
            listLength={array.length}
            color={itemColor}
          />
        );
      })}
    </div>
  );
}

export default List;
