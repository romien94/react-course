import { BASE_URL, HEADERS } from "./constants";

export const serverLogIn = async (email, password) => {
  return fetch(`${BASE_URL}/auth`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());
};

export const serverProfile = async (
  cardNumber,
  expiryDate,
  cardName,
  cvc,
  token
) => {
  return fetch(`${BASE_URL}/card`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      cardNumber,
      expiryDate,
      cardName,
      cvc,
      token,
    }),
  }).then((res) => res.json());
};

export const loadServerProfile = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`).then(
    (res) => {
      if (res.status === 200) return res.json();
    }
  );
};

export const serverRegister = async (
  email,
  password,
  name,
  surname,
) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      email,
      password,
      name,
      surname,
    }),
  }).then(res => res.json())
};


export const serverAddresses = async (startingPoint, endingPoint) => {
  return fetch(`${BASE_URL}/addressList`)
  .then(res => res.json())
}

// export const serverRoute = async (address1, address2) => {
//   return fetch(`${BASE_URL}/route`, {
//     method: 'GET',
//     headers: HEADERS,
//     body: JSON.stringify({
//       address1,
//       address2
//     })
//   })
//   .then(res => res.json())
// }

export const serverRoute = async (address1, address2) => {
  // return fetch(`${BASE_URL}/auth`, {
  //   method: "POST",
  //   headers: HEADERS,
  //   body: JSON.stringify({
  //     address1,
  //     address2,
  //   }),
  // }).then((res) => res.json());
  return fetch(`${BASE_URL}/route?address1=${address1}&address2=${address2}`)
  .then(res => res.json())
};
