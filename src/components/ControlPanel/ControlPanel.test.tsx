import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CustomThemeProvider } from "../../providers";
import ControlPanel, { IControlPanelProps } from "./ControlPanel";
import "@testing-library/jest-dom";

function renderControlPanel(props?: Partial<IControlPanelProps>): JSX.Element {
  const defaultControlPanelProps: IControlPanelProps = {
    stepsCount: 0,
    stepIndex: 0,
    isSorting: false,
    genNewList: () => {},
    performSort: () => {
      return Promise.resolve();
    },
    stopSort: () => {},
    prevStep: () => {},
    nextStep: () => {},
  };

  return (
    <CustomThemeProvider>
      <ControlPanel {...defaultControlPanelProps} {...props} />
    </CustomThemeProvider>
  );
}

describe("Control Panel", () => {
  it("Should disable run button if currently sorting", () => {
    const { getByTestId } = render(renderControlPanel({ isSorting: true }));

    const runButton = getByTestId("run-button");
    expect(runButton).toBeDisabled();
  });

  it("Should disable stop button if currently not sorting", () => {
    const { getByTestId } = render(renderControlPanel({ isSorting: false }));

    const stopButton = getByTestId("stop-button");
    expect(stopButton).toBeDisabled();
  });

  it("Should disable next & previous buttons if currently sorting", () => {
    const { getByTestId } = render(
      renderControlPanel({ stepsCount: 10, stepIndex: 5, isSorting: true })
    );

    const backButton = getByTestId("back-button");
    const nextButton = getByTestId("next-button");
    expect(backButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it("Should disable previous button if viewing the first step", () => {
    const { getByTestId } = render(
      renderControlPanel({ stepIndex: 0, stepsCount: 10, isSorting: false })
    );

    const backButton = getByTestId("back-button");
    expect(backButton).toBeDisabled();
  });

  it("Should disalbe next button if viewing the last step", () => {
    const { getByTestId } = render(
      renderControlPanel({ stepIndex: 9, stepsCount: 10, isSorting: false })
    );

    const nextButton = getByTestId("next-button");
    expect(nextButton).toBeDisabled();
  });
});
