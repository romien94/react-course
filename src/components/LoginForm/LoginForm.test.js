import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import LoginForm from "./LoginForm";

describe("Login works fine", () => {
  const { getByTestId } = render(<LoginForm />);
  it("Snapshot matches", () => {
    const mockLoginForm = renderer.create(<LoginForm />).toJSON();
    expect(mockLoginForm).toMatchSnapshot();
  });

  describe("Contains all the necessary inputs with basic setup", () => {
    expect(getByTestId("username")).toBeTruthy();
    expect(getByTestId("password")).toBeTruthy();
    expect(getByTestId("button")).toBeTruthy();
    expect(getByTestId("button")).toHaveAttribute('type','submit');
  });
});