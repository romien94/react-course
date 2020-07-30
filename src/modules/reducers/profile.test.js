import profile from "./profile";
import { saveCardToStore } from "../actions";

describe("profile module", () => {
    it('saves info', () => {
        expect(profile({}, saveCardToStore('12345', '01/22', 'Kek Cheburek', '123', 'AUTH_TOKEN'))).toEqual({number: '12345', date: '01/22', name: 'Kek Cheburek', cvc: '123', token: 'AUTH_TOKEN'})
    })
    it('returns previous state if no data was provided', () => {
        expect(profile({}, saveCardToStore())).toEqual({})
    })
})
