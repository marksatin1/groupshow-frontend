import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import Form from "../components/ui/Form";
import { IRegisterForm } from "../interfaces/Forms";
import SelectMenu from "../components/ui/SelectMenu";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/ui/NavBar";

const Register = () => {
  const { registerNewUser } = useContext(AuthContext);

  const [formData, setFormData] = useState<IRegisterForm>({
    userRole: "",
    firstName: "",
    lastName: "",
    email: "",
    gradeLevel: "",
    major: "",
    minor: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerNewUser({ registerFormData: formData });
  };

  return (
    <>
      <Form title="Register A New User" onSubmit={handleFormSubmission}>
        <SelectMenu
          id="userRole"
          defaultOption="User Role"
          options={["Student", "Teacher"]}
          onChange={handleInputChange}
        />
        <Input type="text" id="firstName" placeholder="First Name" onChange={handleInputChange} />
        <Input type="text" id="lastName" placeholder="Last Name" onChange={handleInputChange} />
        <Input type="text" id="email" placeholder="Email" onChange={handleInputChange} />
        <SelectMenu
          id="gradeLevel"
          defaultOption="Grade Level"
          options={["Freshman", "Sophomore", "Junior", "Senior"]}
          onChange={handleInputChange}
        />
        <Input type="text" id="major" placeholder="Major" onChange={handleInputChange} />
        <Input type="text" id="minor" placeholder="Major" onChange={handleInputChange} />
        <SubmitButton name="Register" />
      </Form>
    </>
  );
};

export default Register;
