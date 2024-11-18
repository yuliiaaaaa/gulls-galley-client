import { toast, ToastOptions } from 'react-toastify';

export class ToastNotificationService {
  private defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  successToast(message: string) {
    return toast.success(message, this.defaultOptions);
  }

  errorToast(message: string) {
    return toast.error(message, this.defaultOptions);
  }
}

const toastService = new ToastNotificationService();
export { toastService };
