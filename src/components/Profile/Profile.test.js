import React from 'react';
import {render} from '@testing-library/dom';
import renderer from 'react-test-renderer';
import Profile from './Profile';

describe("Login works fine", () => {
    const { getByTestId } = render(<Profile />);
    it("Snapshot matches", () => {
      const mockProfile = renderer.create(<Profile />).toJSON();
      expect(mockProfile).toMatchSnapshot();
    });
  });
  