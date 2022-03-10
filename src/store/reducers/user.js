import { Types } from '../actions/user';

const stateInicial = {
  loading: false,
  data: {},
  errorMessage: '',
};

export default function getUsuario(state = stateInicial, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, errorMessage: '' };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.user.data },
        errorMessage: '',
      };
    case Types.GET_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.mensagemErro,
      };

    default:
      return state;
  }
}
