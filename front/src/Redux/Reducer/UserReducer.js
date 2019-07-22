// import AuthService from '../../Service/AuthService';
// import LoginRegisterService from '../../Service/LoginRegisterService';

let initialState = {
  isLogin: false,
  isAdmin: false,
  token: null,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "USER_CONNECT":
      const ROLES = JSON.parse(action.payload.roles);
      return {
        isLogin: true,
        isAdmin: ROLES.includes("ROLE_ADMIN") || false,
        token: localStorage.getItem('eToken'),
        ...action.payload, 
        roles: ROLES,
      };

    case "USER_LOGOUT":
      return {
        isLogin: false,
        isAdmin: false,
        token: null,
      };

    default:
      return state;
  }
};