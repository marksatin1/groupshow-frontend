import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Form from "../components/ui/Form";
import SubmitButton from "../components/ui/SubmitButton";
import { ISubmitCritiqueForm } from "../interfaces/Forms";
import ArtworkContext from "../context/ArtworkContext";
import AuthContext from "../context/AuthContext";
import { useParams } from "react-router-dom";

const SubmitCritique = () => {
  const { user } = useContext(AuthContext);
  const { artworkID } = useParams();
  const [formData, setFormData] = useState<ISubmitCritiqueForm>({
    rating: -1,
    content: "",
    criticID: user?.userID!,
    artworkID: Number(artworkID),
  });
  const { submitCritique } = useContext(ArtworkContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitCritique({ submitCritiqueFormData: formData });
  };

  return (
    <Form title="Submit a Critique" onSubmit={handleFormSubmission}>
      <hr />
      <label htmlFor="rating">Rating</label>
      <input type="number" id="rating" min="1" max="10" onChange={handleInputChange}></input>
      <textarea placeholder="Critique" name="critique" id="content" onChange={handleInputChange} />
      <SubmitButton name="Submit" />
    </Form>
  );
};

export default SubmitCritique;
