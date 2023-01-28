import "./sortingContainer.css";

interface ISortingContainerProps {
  list: number[];
}

function SortingContainer(props: ISortingContainerProps): JSX.Element {
  const { list } = props;

  return <div className="sorting-container">{list}</div>;
}

export default SortingContainer;
