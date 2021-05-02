import ticketListReducer from "../../reducers/ticket-list-reducer";

describe('ticketListReducer', () => {
  test('Should return default state if there is no action type passed into reducer', () => {
    expect(ticketListReducer({}, {type: null})).toEqual({});
  });
});