import { ControlPanel, SortingContainer } from "./components";
import useSortControls from "./hooks";

function App() {
  const { listState, genNewList, performSort } = useSortControls();

  return (
    <>
      <SortingContainer listState={listState} />
      <ControlPanel genNewList={genNewList} performSort={performSort} />
    </>
  );
}

export default App;
