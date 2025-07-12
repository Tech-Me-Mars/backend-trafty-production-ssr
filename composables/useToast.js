// composables/useToast.js
import { toast } from "vue3-toastify";

export const useToast = () => {
  const getPosition = (position) => {
    switch (position) {
      case "top-right":
        return toast.POSITION.TOP_RIGHT;
      case "bottom-right":
        return toast.POSITION.BOTTOM_RIGHT;
      case "bottom-left":
        return toast.POSITION.BOTTOM_LEFT;
      case "top-left":
        return toast.POSITION.TOP_LEFT;
      case "top-center":
        return toast.POSITION.TOP_CENTER;
      case "bottom-center":
        return toast.POSITION.BOTTOM_CENTER;
      default:
        return toast.POSITION.TOP_RIGHT;
    }
  };

  const showToast = (data) => {
    const {
      color = "success",
      title = "",
      msg = "",
      isError = false,
      position = "top-right",
      life = 3000,
      dataError = null
    } = data;

    const options = {
      autoClose: life === false ? false : life,
      position: getPosition(position),
    };

    const message = title ? `${title}: ${msg}` : msg;
    const severity = isError ? "error" : color;

    switch (severity) {
      case "success":
        toast.success(message, options);
        break;
      case "error":
        toast.error(message, options);
        if (dataError) {
          console.error("Toast Error Data:", dataError);
        }
        break;
      case "warning":
        toast.warning(message, options);
        break;
      case "info":
        toast.info(message, options);
        break;
      default:
        toast(message, options);
        break;
    }
  };

  // Shorthand methods
  const success = (title, msg, options = {}) => {
    showToast({
      color: "success",
      title,
      msg,
      isError: false,
      ...options
    });
  };

  const error = (title, msg, options = {}) => {
    showToast({
      color: "error",
      title,
      msg,
      isError: true,
      ...options
    });
  };

  const warning = (title, msg, options = {}) => {
    showToast({
      color: "warning",
      title,
      msg,
      isError: false,
      ...options
    });
  };

  const info = (title, msg, options = {}) => {
    showToast({
      color: "info",
      title,
      msg,
      isError: false,
      ...options
    });
  };

  return {
    showToast,
    success,
    error,
    warning,
    info
  };
};