import { Outlet, Navigate } from "react-router-dom"; // Outlet = everything wrapped in between this component in App.js
import UserChatComponent from "./user/UserChatComponent";

const ProtectedRoutesComponet = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChatComponent /> <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default ProtectedRoutesComponet;
