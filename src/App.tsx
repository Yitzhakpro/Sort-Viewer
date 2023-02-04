import { ControlPanel, SortingContainer } from "./components";
import useSortControls from "./hooks";

function App() {
  const { listState, genNewList, performSort, stopSort } = useSortControls();

  return (
    <>
      <SortingContainer listState={listState} />
      <ControlPanel
        genNewList={genNewList}
        performSort={performSort}
        stopSort={stopSort}
      />
    </>
  );
}

export default App;
