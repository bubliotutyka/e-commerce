export const userConnect = (payload) => {
  return {
    type: "USER_CONNECT",
    payload,
  };
}

export const userLogout = (payload) => {
  return {
    type: "USER_LOGOUT",
    payload,
  };
}