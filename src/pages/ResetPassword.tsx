import { useState, ChangeEvent } from "react";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import Form from "../components/ui/Form";
import { ResetPasswordFormProps } from "../typing/UIPropTypes";

const ResetPassword = () => {
  const [formData, setFormData] = useState<ResetPasswordFormProps>({
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
    <Form title="Reset Password" onSubmit={handleFormSubmission}>
      <Input type="text" id="password" placeholder="Password" onChange={handleInputChange} />
      <Input
        type="text"
        id="passwordConfirmation"
        placeholder="Confirm password"
        onChange={handleInputChange}
      />
      <SubmitButton name="Reset Password" />
    </Form>
  );
};

export default ResetPassword;
