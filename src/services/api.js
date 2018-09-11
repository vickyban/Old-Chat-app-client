const post = (endpoint, data) => {

  const url = 'http://localhost:4001';
  const request = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(url + endpoint, request);
}

export default {
  post,
}