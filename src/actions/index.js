export const ON_CHANGE_INPUT_TEXT = 'ON_CHANGE_INPUT_TEXT';

export const onChangeInputText = (id, value) => {
  return {
    type: ON_CHANGE_INPUT_TEXT,
    payload: {
      id,
      value,
    }
  }
}
