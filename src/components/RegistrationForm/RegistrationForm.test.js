import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import RegistrationForm from "./RegistrationForm";

describe("Login works fine", () => {
  const { getByTestId } = render(<RegistrationForm />);
  it("Snapshot matches", () => {
    const mockRegistrationForm = renderer.create(<RegistrationForm />).toJSON();
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
