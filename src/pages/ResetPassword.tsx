import { useState, ChangeEvent } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

type ResetPasswordFormData = {
  password: string;
  passwordConfirmation: string;
};

const ResetPassword = () => {
  const [formData, setFormData] = useState<ResetPasswordFormData>({
    password: "",
    passwordConfirmation: "",
  });

  const userID = 1;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();

    console.log(formData);

    // try {
    //   const { data: passwordData }: any = await axInst.post(`/user/reset-password?userID=${userID}`, formData);
    //   console.log(passwordData);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <Input type="text" name="Password" id="password" onChange={handleInputChange} />
      <Input
        type="text"
        name="Confirm Password"
        id="passwordConfirmation"
        onChange={handleInputChange}
      />
      <SubmitButton name="Reset Password" />
    </form>
  );
};

export default ResetPassword;
