import {showAddressesSaga} from './addressesSaga';
import {sendRoute} from '../actions';
import {recordSaga} from './recordSaga'

jest.mock('../api', () => ({
    serverAddresses: jest.fn(() => ({addresses: 'someAddresses'}))
}));

describe("addressesSaga", () => {
    describe("#FETCH_ADDRESSES", () => {
        it('fetches addresses through api', async () => {
            const dispatched = await recordSaga(
                showAddressesSaga,
                sendRoute('point1', 'point2')
            );

            expect(dispatched).toEqual([{
                type: 'GET_ADDRESSES',
                payload: 'someAddresses'
            }])
        })
    })
})
