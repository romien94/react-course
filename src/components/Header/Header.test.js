import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "./Header";

describe("Header works fine", () => {
  const { getByTestId, queryByTestId } = render(<Header />);

  it("Snapshot matched", () => {
    const mockHeader = renderer.create(<Header />).toJSON();
    expect(mockHeader).toMatchSnapshot();
  });

  describe("Contains all the necessary links", () => {
    expect(getByTestId("map").textContent).toBe("Карта");
    expect(getByTestId("profile").textContent).toBe("Профиль");
    expect(getByTestId("exit").textContent).toBe("Выйти");
  });
});
