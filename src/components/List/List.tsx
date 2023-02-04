import { COLOR_SORTING_MAPPING } from "../../constants";
import ListItem from "../ListItem";
import type { IdentifiedNumber, SortStep } from "../../types";
import "./list.css";

interface IListProps {
  listState: SortStep<IdentifiedNumber>;
}

function List(props: IListProps): JSX.Element {
  const { listState } = props;

  const { array, colorMapping, permanentColorMapping } = listState;

  return (
    <div className="list">
      {array.map((identifiedNumber, index) => {
        const { id, number } = identifiedNumber;
        const itemColor =
          COLOR_SORTING_MAPPING[
            permanentColorMapping[index] || colorMapping[index]
          ];

        return (
          <ListItem
            key={id}
            id={id}
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
