import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import renderer from "react-test-renderer";
import LoginForm from "./LoginForm";
import {store} from '../../modules/store';
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const NewLoginForm = () => (
  <BrowserRouter>
    <Provider store={store}>
      <LoginForm />
    </Provider>
  </BrowserRouter>
);

describe("Login works fine", () => {
  const { getByTestId } = render(<NewLoginForm />);
  it("Snapshot matches", () => {
    const mockLoginForm = renderer.create(<NewLoginForm />).toJSON();
    expect(mockLoginForm).toMatchSnapshot();
  });

  describe("Contains all the necessary inputs with basic setup", () => {
    expect(getByTestId("username")).toBeTruthy();
    expect(getByTestId("password")).toBeTruthy();
    expect(getByTestId("button")).toBeTruthy();
    expect(getByTestId("button")).toHaveAttribute('type','submit');
  });

  describe("On submit", () => {
    it('dispatches log in credentials', () => {
      
    })
  })
});