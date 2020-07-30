import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import RegistrationForm from "./RegistrationForm";
import {store} from '../../modules/store';
import {Provider} from 'react-redux';

const NewRegistrationForm = () => (
  <Provider store={store}>
    <RegistrationForm/>
  </Provider>
)

describe("Login works fine", () => {
  const { getByTestId } = render(<NewRegistrationForm />);
  it("Snapshot matches", () => {
    const mockRegistrationForm = renderer.create(<NewRegistrationForm />).toJSON();
    expect(mockRegistrationForm).toMatchSnapshot();
  });

  describe("Contains all the necessary inputs with basic setup", () => {
    expect(getByTestId("email")).toBeTruthy();
    expect(getByTestId("name")).toBeTruthy();
    expect(getByTestId("surname")).toBeTruthy();
    expect(getByTestId("password")).toBeTruthy();
    expect(getByTestId("register")).toBeTruthy();
    expect(getByTestId("register")).toHaveAttribute('type','submit');
  });
});
