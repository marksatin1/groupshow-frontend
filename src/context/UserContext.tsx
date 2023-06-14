import { createContext } from "react";

const UserContext = createContext({
  isLoggedIn: false,
  login: (_email: string, _password: string) => {},
  logout: () => {},
});

export default UserContext;
