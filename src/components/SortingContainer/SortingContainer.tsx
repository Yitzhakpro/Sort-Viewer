import List from "../List";
import "./sortingContainer.css";

interface ISortingContainerProps {
  list: number[];
  maxNum: number;
}

function SortingContainer(props: ISortingContainerProps): JSX.Element {
  const { list, maxNum } = props;

  return (
    <div className="sorting-container">
      <List list={list} maxNum={maxNum} />
    </div>
  );
}

export default SortingContainer;
