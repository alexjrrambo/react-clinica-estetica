import { Types } from '../actions/session';

const stateInicial = {
  loading: false,
  data: {},
  errorMessage: '',
};

export default function loginUser(state = stateInicial, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true, errorMessage: '' };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.session.data },
        errorMessage: '',
      };
    case Types.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        errorMessage: '',
      };
    case Types.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {},
        errorMessage: '',
      };
    case Types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
}
