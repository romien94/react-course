import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Profile from "./Profile";
import {store} from '../../modules/store';
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const NewProfile = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Profile />
    </Provider>
  </BrowserRouter>
);

describe("Profile works fine", () => {
  const {getByTestId} = render(<NewProfile/>);

  it('Snapshot matches', () => {
    const mockProfile = renderer.create(<NewProfile/>).toJSON();
    expect(mockProfile).toMatchSnapshot();
  })
})