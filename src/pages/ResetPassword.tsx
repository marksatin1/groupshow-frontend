import { useState, ChangeEvent, useContext } from "react";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import Form from "../components/ui/Form";
import NavBar from "../components/ui/NavBar";
import { IResetPasswordForm } from "../interfaces/Forms";
import AuthContext from "../context/AuthContext";

const ResetPassword = () => {
  const [formData, setFormData] = useState<IResetPasswordForm>({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const { resetPassword } = useContext(AuthContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();
    resetPassword({ resetPasswordFormData: formData });
  };

  return (
    <>
      <NavBar />
      <Form title="Reset Password" onSubmit={handleFormSubmission}>
        <Input
          type="text"
          id="email"
          placeholder="Email"
          autocomplete="email"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          id="currentPassword"
          placeholder="Current Password"
          autocomplete="currentPassword"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          id="newPassword"
          placeholder="New Password"
          autocomplete="newPassword"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          id="confirmNewPassword"
          placeholder="Confirm New Password"
          autocomplete="confirmNewPassword"
          onChange={handleInputChange}
        />
        <SubmitButton name="Reset Password" />
      </Form>
    </>
  );
};

export default ResetPassword;
