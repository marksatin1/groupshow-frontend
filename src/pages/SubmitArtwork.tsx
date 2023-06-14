import { useState, ChangeEvent } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import RadioBox from "../components/RadioBox";

type ArtworkFormData = {
  fileUrl: string;
  title: string;
  statement?: string;
  artworkType: string;
};

const SubmitArtwork = () => {
  const [formData, setFormData] = useState<ArtworkFormData>({
    fileUrl: "",
    title: "",
    statement: "",
    artworkType: "",
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
      <Input type="file" name="File URL" id="fileUrl" onChange={handleInputChange} />
      <RadioBox
        name="Artwork Types"
        id="artworkType"
        options={["Painting", "Performance", "Photograph", "Song", "Video", "Writing"]}
        onChange={handleInputChange}
      />
      <Input type="text" name="Title" id="title" onChange={handleInputChange} />
      <Input type="text" name="Artist Statement" id="statement" onChange={handleInputChange} />
      <SubmitButton name="Upload Artwork" />
    </form>
  );
};

export default SubmitArtwork;
