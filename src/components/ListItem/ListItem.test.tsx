import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import { describe, it, expect } from "vitest";
import ListItem, { IListItemProps } from "./ListItem";
import "@testing-library/jest-dom";

function renderListItem(props?: Partial<IListItemProps>): JSX.Element {
  const defaultListItemProps: IListItemProps = {
    id: nanoid(),
    number: 50,
    listLength: 5,
    color: "black",
  };

  return <ListItem {...defaultListItemProps} {...props} />;
}

describe("List Item", () => {
  it("Should color the item with the given prop color", () => {
    const number = 1337;
    const color = "pink";

    const { getByTestId } = render(renderListItem({ number, color }));

    const listItem = getByTestId(`list-item-color-${number}`);
    expect(listItem).toHaveStyle(`background-color: ${color}`);
  });
});
