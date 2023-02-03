import { ControlPanel, SortingContainer } from "./components";
import useSortControls from "./hooks";

function App() {
  const { listState, genNewList } = useSortControls();

  return (
    <>
      <SortingContainer listState={listState} />
      <ControlPanel genNewList={genNewList} />
    </>
  );
}

export default App;
