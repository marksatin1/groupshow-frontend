import { useState, ChangeEvent } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();

    console.log(formData);

    // try {
    //   const { data: loginData }: any = await axInst.post("/user/login", formData);
    //   console.log(loginData);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <Input type="text" name="Email" id="email" onChange={handleInputChange} />
      <Input type="text" name="Password" id="password" onChange={handleInputChange} />
      <SubmitButton name="Login" />
    </form>
  );
};

export default Login;
