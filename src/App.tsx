import { ControlPanel, SortingContainer } from "./components";
import { useSortControls } from "./hooks";

function App() {
  const {
    listState,
    stepsCount,
    stepIndex,
    isSorting,
    genNewList,
    performSort,
    stopSort,
    prevStep,
    nextStep,
  } = useSortControls();

  return (
    <>
      <SortingContainer listState={listState} />
      <ControlPanel
        stepsCount={stepsCount}
        stepIndex={stepIndex}
        isSorting={isSorting}
        genNewList={genNewList}
        performSort={performSort}
        stopSort={stopSort}
        prevStep={prevStep}
        nextStep={nextStep}
      />
    </>
  );
}

export default App;
