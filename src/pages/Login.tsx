import { useState, ChangeEvent, useContext } from "react";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import Form from "../components/ui/Form";
import { ILoginForm } from "../interfaces/Forms";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/ui/NavBar";

const Login = () => {
  const [formData, setFormData] = useState<ILoginForm>({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev: ILoginForm) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: SubmitEvent) => {
    e.preventDefault();
    await login({ loginFormData: formData });
  };

  return (
    <>
      <NavBar />
      <Form title="Login" onSubmit={handleFormSubmission}>
        <Input
          type="text"
          id="email"
          placeholder="Email"
          autocomplete="username"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          autocomplete="current-password"
          onChange={handleInputChange}
        />
        <SubmitButton name="Login" />
      </Form>
    </>
  );
};

export default Login;
