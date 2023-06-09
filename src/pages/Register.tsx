import RadioBox from "../components/RadioBox";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { ChangeEvent, useState } from "react";
import { axInst } from "../config/axiosInstance";

type RegisterFormData = {
  userRole: string;
  firstName: string;
  lastName: string;
  email: string;
  gradeLevel: string;
  major: string;
  minor: string;
};

const Register = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
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

    // try {
    //   const { data: userData }: any = await axInst.post("/user/register", formData);
    //   console.log(userData);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <RadioBox
        name="userRole"
        id="userRole"
        options={["Student", "Teacher"]}
        onChange={handleInputChange}
      />
      <Input type="text" name="First Name" id="firstName" onChange={handleInputChange} />
      <Input type="text" name="Last Name" id="lastName" onChange={handleInputChange} />
      <Input type="text" name="Email" id="email" onChange={handleInputChange} />
      <RadioBox
        name="gradeLevel"
        id="gradeLevel"
        options={["Freshman", "Sophomore", "Junior", "Senior"]}
        onChange={handleInputChange}
      />
      <Input type="text" name="Major" id="major" onChange={handleInputChange} />
      <Input type="text" name="Minor" id="minor" onChange={handleInputChange} />
      <SubmitButton name="Register" />
    </form>
  );
};

export default Register;
