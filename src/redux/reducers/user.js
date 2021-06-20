export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_COMPLEX_DATA = 'SET_USER_COMPLEX_DATA';

const initialState = {
  name: '',
  complexData: {
    a: 1,
    b: 2,
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME: {
      return {
        ...state,
        name: action.payload.name,
      };
    }

    case SET_USER_COMPLEX_DATA: {
      return {
        ...state,
        complexData: {
          ...state.complexData,
          b: action.payload.b,
        },
      };
    }

    default:
      return state;
  }
}
