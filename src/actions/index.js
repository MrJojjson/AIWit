export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const ON_CHANGE_INPUT_TEXT = 'ON_CHANGE_INPUT_TEXT';
export const SAVE_MESSAGE_AND_ANSWER = 'SAVE_MESSAGE_AND_ANSWER';
export const SET_INITIAL_DATA = 'SET_INITIAL_DATA';

export const setLoadingState = state => {
  return {
    type: SET_LOADING,
    payload: {
      state
    }
  }
}

export const setErrorMessage = error => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: {
      error
    }
  }
}

export const onChangeInputText = (id, value) => {
  return {
    type: ON_CHANGE_INPUT_TEXT,
    payload: {
      id,
      value,
    }
  }
}

export const saveMessageAndAnswer = messageAndAnswer => {
  return {
    type: SAVE_MESSAGE_AND_ANSWER,
    payload: {
      messageAndAnswer
    }
  }
}

export const setInitialData = text => {
  return {
    type: SET_INITIAL_DATA,
    payload: {
      text
    }
  }
}