import { 
  ON_CHANGE_INPUT_TEXT,
 } from '../actions';

const initialState = {
  message: '',
  messages: [],
  inputsText: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ON_CHANGE_INPUT_TEXT:
      return {
        ...state,
        inputsText: {
          ...state.inputsText,
          [action.payload.id]: action.payload.value,
        },
      };
    default:
      return state;
  }
}

export default reducer;