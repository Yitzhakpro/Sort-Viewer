import { ControlPanel, SortingContainer } from "./components";
import useSortControls from "./hooks";

function App() {
  const { list, maxNum, genNewList } = useSortControls();

  return (
    <>
      <SortingContainer list={list} maxNum={maxNum} />
      <ControlPanel genNewList={genNewList} />
    </>
  );
}

export default App;
