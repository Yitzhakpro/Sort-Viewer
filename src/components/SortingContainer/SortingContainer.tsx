import List from "../List";
import type { IdentifiedNumber, SortStep } from "../../types";
import "./sortingContainer.css";

interface ISortingContainerProps {
  listState: SortStep<IdentifiedNumber>;
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
