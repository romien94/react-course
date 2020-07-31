import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Map from "./Map";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: jest.fn(() => ({ addControl: () => {} })),
  GeolocateControl: jest.fn(),
}));

describe('Map works fine', () => {
  const { getByTestId, queryByTestId } = render(<Map/>);

  describe('Has map module', () => {
    expect(getByTestId('map')).toBeTruthy();
  })

  describe('Form is there', () => {
    expect(getByTestId('from')).toBeTruthy();
  })

  it("Snapshot matched", () => {
    const mockMap = renderer.create(<Map />).toJSON();
    expect(mockMap).toMatchSnapshot();
  });
})