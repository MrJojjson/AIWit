const baseURL = 'http://192.168.0.3:8081/';
const bookApi = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
const newUser = 'newUser';
const initUrl = 'init';
const sendMessage = 'sendMessage';
const getMessages = 'getMessages';
const discogs = 'discogs';
const booksIsbn = 'isbn/'

const fetchPost = (url, user, data) => fetch(url, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user,
    data
  }),
});

const fetchGet = (url, user, data) => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const setNewUser = user => {
  const URL =  baseURL + newUser;
  return fetchPost(URL, user)
    .then((response) => {
      console.log('init response => ', response);
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

export const getInitData = user => {
  const URL =  baseURL + initUrl;
  return fetchPost(URL, user)
    .then((response) => {
      console.log('init response => ', response);
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

export const getAnswerFromWit = message => {
  const URL =  baseURL + sendMessage;
  return fetchPost(URL, '1', message)
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

export const getDiscogs = id => {
  const URL =  baseURL + discogs;
  return fetchPost(URL, null, id)
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

export const getBooks = isbn => {
  const URL =  bookApi + isbn;
  return fetchGet(URL)
    .then((response) => {
      console.log('response', response);
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