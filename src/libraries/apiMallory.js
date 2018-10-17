/*import firebase from "./firebase";
import snapshotToArray from "../utils/snapshotToArray";

export function auth(user, type = "signIn") {
  if (type === "singUp") {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
  } else {
    return firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password);
  }
}

export function makeShop(shop) {
  const user = firebase.auth().currentUser;
  console.log(user);
}

export function getShops() {
  const user = firebase.auth().currentUser;
  return firebase
    .database()
    .ref(`user-shops/${user.uid}`)
    .once("value")
    .then(snapshot => {
      return snapshotToArray(snapshotToArray);
    });
}*/
const apiURL = "https://mallory-furniture-admin.now.sh/api/v1/";

export const getAllProducts = () => {
  return fetch(`${apiURL}products/`).then(response => response.json());
};

export const getCategoryProducts = category => {
  return fetch(`${apiURL}products?category=${category}`).then(response =>
    response.json()
  );
};

export const singleFilterProducts = (
  nameParam,
  typeofParam,
  searchKey,
  arrayData
) => {
  if (typeof typeofParam == "boolean") {
    return arrayData.filter(el => {
      return el[nameParam];
    });
  } else if (typeof typeofParam == "string") {
    return arrayData.filter(el => {
      return el[nameParam] === searchKey;
    });
  } else {
    console.log("sin poder filtrar");
  }
};
