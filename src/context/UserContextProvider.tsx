import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    // verify credentials on backend

    setIsLoggedIn(true);
  };

  const logout = () => {
    // clear user session on frontend
    // do any necessary backend cleanup

    setIsLoggedIn(false);
  };

  const userContext = {
    isLoggedIn,
    login,
    logout,
  };

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
