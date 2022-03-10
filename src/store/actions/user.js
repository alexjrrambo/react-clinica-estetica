export const Types = {
  GET_REQUEST: 'user/GET_REQUEST',
  GET_SUCCESS: 'user/GET_SUCCESS',
  GET_ERROR: 'user/GET_ERROR',
};

export const Actions = {
  getUserRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getUserSuccess: data => ({
    type: Types.GET_SUCCESS,
    user: { data },
  }),
  getUsuarioError: errorMessage => ({
    type: Types.GET_ERROR,
    errorMessage,
  }),
};
