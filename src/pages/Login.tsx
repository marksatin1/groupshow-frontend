import { useState, ChangeEvent, useContext } from "react";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import Form from "../components/ui/Form";
import { ILoginForm } from "../typing/Auth";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState<ILoginForm>({
    email: "",
    password: "",
  });
  const authCtx = useContext(AuthContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev: ILoginForm) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();

    console.log({ formData });

    await authCtx.login({ loginForm: { email: formData.email, password: formData.password } });
  };

  return (
    <Form title="Login" onSubmit={handleFormSubmission}>
      <Input type="text" id="email" placeholder="Email" onChange={handleInputChange} />
      <Input type="password" id="password" placeholder="Password" onChange={handleInputChange} />
      <SubmitButton name="Login" />
    </Form>
  );
};

export default Login;
