import { useState, ChangeEvent } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

type SubmitArtworkFormData = {
  title: string;
  statement?: string;
  type: string;
};

const SubmitArtwork = () => {
  const [formData, setFormData] = useState<SubmitArtworkFormData>({
    title: "",
    statement: "",
    type: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();

    console.log(formData);

    // try {
    //   const { data: artworkData }: any = await axInst.post(`/${artworkType}/upload`, formData);
    //   console.log(artworkData);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <Input type="text" name="Title" id="title" onChange={handleInputChange} />
      {formData.statement && (
        <Input type="text" name="Artist Statement" id="statement" onChange={handleInputChange} />
      )}
      <SubmitButton name="Upload Artwork" />
    </form>
  );
};

export default SubmitArtwork;
