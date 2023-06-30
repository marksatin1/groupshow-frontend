import {useState, ChangeEvent} from "react";
import Form from "../components/ui/Form";
import SubmitButton from "../components/ui/SubmitButton";
import { ISubmitCritiqueForm } from "../interfaces/Forms";
import Input from "../components/ui/Input";

const SubmitCritique = () => {
const [formData, setFormData] = useState<ISubmitCritiqueForm>({
  rating: -1,
  content: "",
});

const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const {id, value} = e.target;

  setFormData(prev => ({...prev, [id]: value}));
}

const handleFormSubmission = async (e: any) => {
  e.preventDefault();

  console.log(formData)

  // submit critique to backend
}



  return (

    <Form className="form" title="Submit a Critique" onSubmit={handleFormSubmission}>
      <hr />
      <Input type="number" id="rating" onChange={handleInputChange} />
      <textarea placeholder="Critique" name="critique" id="content" onChange={handleInputChange} />
      <SubmitButton name="Submit" />
    </Form>
  )
}

export default SubmitCritique