const LOGIN_URL = 'http://localhost:3001/login';
const countryAPIURL = 'http://localhost:3001/api/v1/countries';

let token = null;

async function getCountriesByName(name) {
  if(!token) {
    try {
      token = await getToken();
    } catch (e) {
      return Promise.reject(e);
    }
  }
  return fetch(`${countryAPIURL}/${name}?token=${token}`)
    .then((res) => res.json(), async (err) => {
      if(err.status === 401) {
        token = await getToken();
      }

      throw new Error(err);
    });
}

async function getToken() {
  return new Promise((resolve, reject) => {
    fetch(LOGIN_URL)
      .then((res) => {
        if(res.status === 429) {
          return reject({
            status: 429,
            message: 'Too many requests, please try again later.'
          });
        }
        res.text().then((data) => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
      }, (err) => {
        reject(err);
      });
  });
}

export { getCountriesByName };
