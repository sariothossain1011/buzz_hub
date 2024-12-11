import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ValidationHelpers {
  IsEmpty(value: string): boolean {
    return value.length === 0;
  }

  SuccessToast(msg: string): void {
    toast.success(msg, { position: "top-right" });
  }

  ErrorToast(msg: string): void {
    toast.error(msg, { position: "top-right" });
  }
}

// Export individual methods with proper typing
const validationHelpers = new ValidationHelpers();
export const { IsEmpty, SuccessToast, ErrorToast } = validationHelpers;
