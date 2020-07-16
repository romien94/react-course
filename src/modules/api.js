import { BASE_URL, HEADERS } from "./constants";

export const serverLogIn = async (email, password) => {
  return fetch(`${BASE_URL}/auth`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(res => res.json())
    .then(data => data.success);
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
  }).then((res) => {
    if (res.status === 200) return res.json();
  });
};

export const loadServerProfile = async (token) => {
  // return fetch(`${BASE_URL}/card`, {
  //   method: 'POST',
  //   headers: HEADERS,
  //   body: JSON.stringify(token)
  // })
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`).then(
    (res) => {
      if (res.status === 200) return res.json();
    }
  );
};
