import { toast } from 'react-toastify';


export function reportError(error, fallbackMessage) {
  
  console.error(error);
  const errAny = /** @type {any} */ (error);
  const serverMessage = (errAny && errAny.response && errAny.response.data && (errAny.response.data.message || errAny.response.data)) || (errAny && errAny.message) || String(errAny);
  toast.error(serverMessage || fallbackMessage || 'Something went wrong');
}

export default reportError;
