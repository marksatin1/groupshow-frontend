import { useState, ChangeEvent } from "react";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import { LoginFormProps } from "../typing/UIPropTypes";
import Form from "../components/ui/Form";

const Login = () => {
  const [formData, setFormData] = useState<LoginFormProps>({
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
    <Form title="Login" onSubmit={handleFormSubmission}>
      <Input type="text" id="email" placeholder="Email" onChange={handleInputChange} />
      <Input type="password" id="password" placeholder="Password" onChange={handleInputChange} />
      <SubmitButton name="Login" />
    </Form>
  );
};

export default Login;
