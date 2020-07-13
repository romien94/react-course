import { profileMiddleware } from "./profileMiddleware";
import { saveProfile } from "../actions";
import { serverProfile } from "../api";

jest.mock("../api", () => ({ serverProfile: jest.fn(() => true) }));

describe("profileMiddleware", () => {
  afterAll(jest.clearAllMocks);

  describe("#SAVE_PROFILE", () => {
    describe('with correct credentials', () => {
      it('saves data', async () => {
        serverProfile.mockImplementation(async () => true);
        const dispatch = jest.fn();

        await profileMiddleware({dispatch})()(
          serverProfile('1111111111111111', '02/25', 'Kek Cheburek', '123', 'AUTH_TOKEN')
        )
        expect(serverProfile).toBeCalledWith('1111111111111111', '02/25', 'Kek Cheburek', '123', 'AUTH_TOKEN');
        expect(dispatch).toBeCalledWith({
          type: 'SAVE_PROFILE',
          number: '1111111111111111',
          date: '02/25',
          name: 'Kek Cheburek',
          cvc: '123',
          token: 'AUTH_TOKEN',
          type: 'SAVE_TO_STORE',
        })
      })
    })
  })
});
