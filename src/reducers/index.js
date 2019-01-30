import {
  SET_LOADING,
  ON_CHANGE_INPUT_TEXT,
  SAVE_MESSAGE_AND_ANSWER,
  SET_ERROR_MESSAGE,
  SET_INITIAL_DATA,
 } from '../actions';

const initialState = {
  loading: true,
  loggedIn: false,
  errorMessage: '',
  messages: [],
  inputsText: [],
  registrationState: 'signIn'
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.state,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case ON_CHANGE_INPUT_TEXT:
      return {
        ...state,
        inputsText: {
          ...state.inputsText,
          [action.payload.id]: action.payload.value,
        },
      };
    case SAVE_MESSAGE_AND_ANSWER:
      return {
        ...state,
        messages: [...state.messages, action.payload.messageAndAnswer],
      };
    case SET_INITIAL_DATA:
      return {
        ...state,
        messages: action.payload.text,
      };
    default:
      return state;
  }
}

export default reducer;