import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "./Header";
import { store } from "../../modules/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const NewHeader = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Header />
    </Provider>
  </BrowserRouter>
);

describe("Header works fine", () => {
  const { getByTestId, queryByTestId } = render(<NewHeader />);

  it("Snapshot matched", () => {
    const mockHeader = renderer.create(<NewHeader />).toJSON();
    expect(mockHeader).toMatchSnapshot();
  });

  describe("Contains all the necessary links", () => {
    expect(getByTestId("map").textContent).toBe("Карта");
    expect(getByTestId("profile").textContent).toBe("Профиль");
    expect(getByTestId("exit").textContent).toBe("Выйти");
  });
});
