export const getInputText = (state, id) => state.inputsText && state.inputsText[id];

export const getLoggedInState = state => state.loggedIn;

export const getAnswersFromWit = state => state.messages;

export const getMessagesText = state => state.messages.map(message => {
  return { text: message._text, id: message.msg_id};
});

export const getRegistrationState = state => state.registrationState;
