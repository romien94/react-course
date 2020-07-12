import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import PaymentForm from "./PaymentForm";

describe("Login works fine", () => {
  const { getByTestId } = render(<PaymentForm />);
  it("Snapshot matches", () => {
    const mockPaymentForm = renderer.create(<PaymentForm />).toJSON();
    expect(mockPaymentForm).toMatchSnapshot();
  });

  describe("Contains all the necessary inputs with basic setup", () => {
    expect(getByTestId("number")).toBeTruthy();
    expect(getByTestId("date")).toBeTruthy();
    expect(getByTestId("name")).toBeTruthy();
    expect(getByTestId("cvc")).toBeTruthy();
    expect(getByTestId("save")).toBeTruthy();
    expect(getByTestId("save")).toHaveAttribute('type', 'submit');
  });
});
