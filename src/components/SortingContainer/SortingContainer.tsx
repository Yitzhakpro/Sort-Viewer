import List from "../List";
import type { SortStep } from "../../types";
import "./sortingContainer.css";

interface ISortingContainerProps {
  listState: SortStep<number>;
}

function SortingContainer(props: ISortingContainerProps): JSX.Element {
  const { listState } = props;

  return (
    <div className="sorting-container">
      <List listState={listState} />
    </div>
  );
}

export default SortingContainer;
