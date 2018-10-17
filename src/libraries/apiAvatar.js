const apiURLAvatar = "https://randomuser.me/api/?gender=male";
//get artist
export const getAvatar = avatar => {
  return fetch(apiURLAvatar).then(response => response.json());
};
