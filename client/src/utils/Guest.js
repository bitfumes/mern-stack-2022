import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export default function Guest({ children }) {
  const token = Cookies.get("token");

  return !token ? children : <Navigate to="/" replace={true} />;
}
