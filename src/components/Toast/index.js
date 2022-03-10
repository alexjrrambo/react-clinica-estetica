import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* Tipos
 *  'default'
 *  'error'
 *  'warining'
 *  'info'
 *  'success'
 * */

export const showToast = (message, type = 'default', autoClose = false) => {
  toast.dismiss();

  toast(message, {
    type,
    position: toast.POSITION.TOP_RIGHT,
    autoClose,
    hideProgressBar: true,
  });
};
