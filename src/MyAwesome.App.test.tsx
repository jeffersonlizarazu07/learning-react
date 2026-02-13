import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

// describe("MyAwesomeApp", () => {
//   test("should render first name and last name", () => {});
//   // const { container } = render(<MyAwesomeApp />);
//   screen.debug();

//   const h1 = container.querySelector("h1");
//   const h3 = container.querySelector("h3");

//   expect(h1?.innerHTML).toContain("Jefferson");
//   expect(h3?.innerHTML).toContain("Lizarazu");
// });

describe("MyAwesomeApp", () => {
  test("should render first name and last name - screen", () => {});
  render(<MyAwesomeApp />);
  screen.debug();

  test("Should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });
});
