import React from 'react';
import {render} from '@testing-library/react';
import {renderer} from 'react-test-renderer';
import MapForm from './MapForm';

describe('MapForm', () => {
    const {getByTestId, queryByTestId} = render(<MapForm/>);

    describe('Map has all necessary fields', () => {
        expect(getByTestId('from')).toBeTruthy();
        expect(getByTestId('to')).toBeTruthy();
        expect(getByTestId('call')).toBeTruthy();
        expect(getByTestId('call')).toHaveAttribute('type', 'submit');
    });

    it("Snapshot matched", () => {
        const mockMapForm = renderer.create(<MapForm />).toJSON();
        expect(mockMapForm).toMatchSnapshot();
      });
})