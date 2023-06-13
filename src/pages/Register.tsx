import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import { ChangeEvent, useState } from "react";
import Form from "../components/ui/Form";
import { RegisterFormProps } from "../typing/UIPropTypes";
import { axInst } from "../config/axiosInstance";
import SelectMenu from "../components/ui/SelectMenu";

const Register = () => {
  const [formData, setFormData] = useState<RegisterFormProps>({
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

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();

    console.log(formData);

    // try {
    //   const { data: userData }: any = await axInst.post("/user/register", formData);
    //   console.log(userData);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
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
  );
};

export default Register;
