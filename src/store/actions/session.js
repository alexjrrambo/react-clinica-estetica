export const Types = {
  LOGIN_REQUEST: 'session/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'session/LOGIN_SUCCESS',
  LOGOUT_REQUEST: 'session/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'session/LOGOUT_SUCCESS',
  LOGIN_ERROR: 'session/LOGIN_ERROR',
};

export const Actions = {
  loginUserRequest: (email, password, redirect = true) => ({
    type: Types.LOGIN_REQUEST,
    session: { email, password, redirect },
  }),
  loginUserSuccess: data => ({
    type: Types.LOGIN_SUCCESS,
    session: { data },
  }),
  logoutUserRequest: () => ({
    type: Types.LOGOUT_REQUEST,
  }),
  logoutUserSuccess: () => ({
    type: Types.LOGOUT_SUCCESS,
  }),
  loginUserError: errorMessage => ({
    type: Types.LOGIN_ERROR,
    errorMessage,
  }),
};
