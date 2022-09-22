import { NotificationManager } from "react-notifications";

export const createNotification = (type, msg) => {
  // return (type, msg) => {
  console.log("inside notyfs : ", type, msg);
  switch (type) {
    case "info":
      NotificationManager.info(msg);
      break;
    case "success":
      NotificationManager.success("Success message", msg);
      break;
    case "warning":
      NotificationManager.warning("Warning message", msg, 3000);
      break;
    case "error":
      NotificationManager.error("Error message", msg, 5000, () => {
        alert("callback");
      });
      break;
    default:
  }
  // };
};
