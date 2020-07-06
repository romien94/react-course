import React from "react";
// import jest from "jest";
import { render } from "@testing-library/dom";
import renderer from "react-test-renderer";
import Map from "./Map";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: jest.fn(() => ({ addControl: () => {} })),
  GeolocateControl: jest.fn(),
}));

describe("sdasdas", () => {
  it("dsadas", () => {
    
  });
});
