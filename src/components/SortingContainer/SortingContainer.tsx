import List from "../List";
import "./sortingContainer.css";

interface ISortingContainerProps {
  list: number[];
}

function SortingContainer(props: ISortingContainerProps): JSX.Element {
  const { list } = props;

  return (
    <div className="sorting-container">
      <List list={list} />
    </div>
  );
}

export default SortingContainer;
