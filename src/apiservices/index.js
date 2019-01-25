const answerFromWitUrl = 'http://192.168.0.3:8081/message';

const fetchPost = (url, message) => fetch(url, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message
  }),
});

export const getAnswerFromWit = (message) => {
  return fetchPost(answerFromWitUrl, message)
    .then((response) => {
      const { status, _bodyInit } = response;
      var text = _bodyInit;
      try {
        text = JSON.parse(_bodyInit);
      }
      catch(e) {
        console.log('invalid json');
      }
      return { response, status, text };
    })
    .catch((error) => {
      console.log('error', error)
      return error;
    });
}
