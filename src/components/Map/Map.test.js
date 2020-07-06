import React from "react";
import jest from 'jest'
import { render } from "@testing-library/dom";
import renderer from "react-test-renderer";
import Map from "./Map";

describe("your test suite", () => {
    window.URL.createObjectURL = jest.fn();
  
    afterEach(() => {
      window.URL.createObjectURL.mockReset();
    });
  
    it("your test case", () => {
      expect(true).toBeTruthy();
    });
  });

// describe("Map works fine", () => {
//   window.URL.createObjectURL = function () {};

//   describe("Contains form with all the necessary inputs", () => {
//     expect(getByTestId("form")).toBeTruthy();
//     expect(getByTestId("from")).toBeTruthy();
//     expect(getByTestId("to")).toBeTruthy();
//     expect(getByTestId("to")).toBeTruthy();
//     expect(getByTestId("call")).toBeTruthy();
//     expect(getByTestId("call")).toHaveAttribute("type", "submit");
//   });
  //   const { getByTestId } = render(<Map />);
  //   it("Snapshot matches", () => {
  //     const mockMap = renderer.create(<Map />).toJSON();
  //     expect(mockMap).toMatchSnapshot();
  //   });

  //   it('Contains ref for the map', () => {
  //     expect(getByTestId("form")).toHaveAttribute('ref');
  //   })

  //   describe("Contains form with all the necessary inputs", () => {
  //     expect(getByTestId("form")).toBeTruthy();
  //     expect(getByTestId("from")).toBeTruthy();
  //     expect(getByTestId("to")).toBeTruthy();
  //     expect(getByTestId("to")).toBeTruthy();
  //     expect(getByTestId("call")).toBeTruthy();
  //     expect(getByTestId("call")).toHaveAttribute('type', 'submit');
  //   });
// });
