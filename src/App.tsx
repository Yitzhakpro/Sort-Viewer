import React from 'react';
import { ControlPanel, SortingContainer } from './components';
import { useSortControls } from './hooks';
import { CustomThemeProvider } from './providers';

function App(): JSX.Element {
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
		<CustomThemeProvider>
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
		</CustomThemeProvider>
	);
}

export default App;
