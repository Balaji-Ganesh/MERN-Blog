export const LoginStart = (userCredentials) => {
  type: "LOGIN_START";
};
// After clicked on "LOGIN", may result in action-2 or action-3 (refer notes.md)

// action-2.
export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

// action-3.
export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

// action-4..
export const LogOut = () => ({
  type: "LOGOUT",
});
