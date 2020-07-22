import { loadProfileSaga, saveProfileSaga } from "./profileSaga";
import { loadProfile, saveProfile } from "../actions";
import { recordSaga } from "./recordSaga";

jest.mock("../api", () => ({
  loadServerProfile: jest.fn(() => ({
    cardNumber: "cardNumber",
    expiryDate: "expiryDate",
    cardName: "cardName",
    cvc: "cvc",
  })),
}));

describe("profileSaga", () => {
  describe("#LOAD_PROFILE", () => {
    it("loads profile through api", async () => {
      const dispatched = await recordSaga(
        loadProfileSaga,
        loadProfile("someToken")
      );
      expect(dispatched).toEqual([
        {
            type: "SAVE_TO_STORE",
            payload: {
              number: "cardNumber",
              date: "expiryDate",
              name: "cardName",
              cvc: 'cvc',
              token: undefined,
            //   type: 'SAVE_TO_STORE'
            }
          },
      ]);
    });
  });
});
