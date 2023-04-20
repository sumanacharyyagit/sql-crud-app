import { getToken } from "../util-method/getToken";

const { token } = getToken();

export const signinUserData = (payload) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/api/v1/user/login", {
      method: "POST",
      headers: {
        // Authentication: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error Request");
        }
        return response.json();
      })
      .then((json) => {
        localStorage.setItem(
          "tokenval",
          JSON.stringify({ token: json?.token, user: json?.user })
        );
        resolve(json);
      })
      .catch((error) => reject(error));
  });
};

export const signupUserData = (payload) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/api/v1/user/signup", {
      method: "POST",
      headers: {
        // Authentication: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error Request");
        }
        return response.json();
      })
      .then((json) => {
        // localStorage.setItem(
        //   "tokenval",
        //   JSON.stringify({ token: json?.token, user: json?.user })
        // );
        resolve(json);
      })
      .catch((error) => reject(error));
  });
};

export const getAllUserData = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/api/v1/user/data/all", {
      method: "GET",
      headers: {
        Authentication: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error Request");
        }
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => reject(error));
  });
};

export const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/api/v1/user/get/data", {
      method: "GET",
      headers: {
        Authentication: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error Request");
        }
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => reject(error));
  });
};

export const updateUserData = (id, payload) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8080/api/v1/user/update/data/${id}`, {
      method: "PATCH",
      headers: {
        Authentication: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error Request");
        }
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => reject(error));
  });
};

export const deleteUserData = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8080/api/v1/user/delete/data/${id}`, {
      method: "DELETE",
      headers: {
        Authentication: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error Request");
        }
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => reject(error));
  });
};
