import auth from "./auth";
import { logIn, logOut } from "../actions";

describe("auth module", () => {
  it("logs in", () => {
    expect(auth({}, logIn())).toEqual({ isLoggedIn: true });
  });
  it('logs out', () => {
      expect(auth({}, logOut())).toEqual({isLoggedIn: false});
  })
  it('returns previous state if no case on switch/case or middleware was found', () => {
      expect(auth({}, {type: 'MOCK'})).toEqual({})
  })
});
