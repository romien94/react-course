import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import PaymentForm from "./PaymentForm";
import {store} from '../../modules/store';
import {Provider} from 'react-redux';

const NewPaymentForm = () => (
  <Provider store={store}>
    <PaymentForm/>
  </Provider>
)

describe("Login works fine", () => {
  const { getByTestId } = render(<NewPaymentForm />);
  it("Snapshot matches", () => {
    const mockPaymentForm = renderer.create(<NewPaymentForm />).toJSON();
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
