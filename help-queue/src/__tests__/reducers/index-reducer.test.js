import rootReducer from '../../reducers/index';

describe("rootReducer", () =>{
  test('Should return default state if no action type recognized', () => {
    expect(rootReducer({}, {type: null })).toEqual({
      masterTicketList: {},
      formVisibleOnPage: false
    });
  });
});