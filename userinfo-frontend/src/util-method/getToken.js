export const getToken = () => {
  if (localStorage.getItem("tokenval")) {
    return JSON.parse(localStorage.getItem("tokenval"));
  } else {
    return { token: false };
  }
};