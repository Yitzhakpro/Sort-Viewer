import { ControlPanel, SortingContainer } from "./components";
import useSortControls from "./hooks";

function App() {
  const { list, genNewList } = useSortControls();

  return (
    <>
      <SortingContainer list={list} />
      <ControlPanel genNewList={genNewList} />
    </>
  );
}

export default App;
