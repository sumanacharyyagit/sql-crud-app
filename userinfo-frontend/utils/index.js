export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwtAuthent", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("tokenval")) {
    return JSON.parse(localStorage.getItem("tokenval"));
  } else {
    return false;
  }
};
