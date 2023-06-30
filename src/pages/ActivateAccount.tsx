import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ActivateAccount = () => {
  const { activateAccount } = useContext(AuthContext);
  const navigate = useNavigate();
  const { userID, regToken } = useParams();

  const activate = async () => {
    const isActivated = await activateAccount(Number(userID), regToken!);
    if (isActivated) {
      navigate("/auth/reset-password");
    }
  };

  useEffect(() => {
    activate();
  }, []);

  return (
    <div>
      <h1>Welcome to GroupShow!</h1>
      <br />
      <h3>Thank you for activating your account.</h3>
      <h3>Please wait while you are redirected.</h3>
      <br />
    </div>
  );
};

export default ActivateAccount;
