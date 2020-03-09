const BFF_URL = 'http://localhost:3001';

let token = null;

async function getCountriesByName(name) {
  const countryAPIURL = `${BFF_URL}/api/v1/countries`;
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
  const loginURL = `${BFF_URL}/login`;
  return new Promise((resolve, reject) => {
    fetch(loginURL)
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
