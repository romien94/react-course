export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  )
    .then((res) => res.json())
    .then((data) => data.success);
};

export const serverProfile = async (number, date, name, cvc, token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?cardNumber=${number}&expiryDate=${date}&cardName=${name}&cvc=${cvc}&token=${token}`,
    { method: "POST" }
  )
    .then((res) => res.json())
    .then((data) => data.success);
};

export const loadServerProfile = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`)
    .then((res) => res.json())
    .then((data) => data);
};


// export const serverProfile = async (number, date, name, cvc, token) => {
//   return fetch(
//     `https://loft-taxi.glitch.me/card?cardNumber=${number}&expiryDate=${date}&cardName=${name}&cvc=${cvc}&token=${token}`,
//     { method: "POST" }
//   )
//     .then((res) => res.json())
//     .then((profileData) => profileData);
// };

// export const getProfileFromServer = async (token) => {
//   return fetch(`https://loft-taxi.glitch.me/card?token=${token}`)
//     .then((res) => res.json())
//     .then(data => data);
// };

// export const saveInfoFromLocalStorage = () => {
//   const dataFromLocalStorage = localStorage.getItem("cardInfo");
//   console.log(dataFromLocalStorage);
// };
