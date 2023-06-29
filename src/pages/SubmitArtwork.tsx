import { useState, ChangeEvent } from "react";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import Form from "../components/ui/Form";
import SelectMenu from "../components/ui/SelectMenu";
import PaintingOptions from "../components/ui/options/PaintingOptions";
import PerformanceOptions from "../components/ui/options/PerformanceOptions";
import PhotographOptions from "../components/ui/options/PhotographOptions";
import SongOptions from "../components/ui/options/SongOptions";
import VideoOptions from "../components/ui/options/VideoOptions";
import WritingOptions from "../components/ui/options/WritingOptions";
import { ISubmitArtworkForm } from "../interfaces/Forms";

const SubmitArtwork = () => {
  const [formData, setFormData] = useState<ISubmitArtworkForm>({
    artworkType: "",
    title: "",
    artistStatement: "",
    isOpenForCritique: "",
    fileUrl: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();

    console.log(formData);

    // submit artwork method via artworkContext
  };

  return (
    
    <Form className="form" title="Submit Your Art!" onSubmit={handleFormSubmission}>
      <Input type="file" id="fileUrl" onChange={handleInputChange} />
      <SelectMenu
        id="artworkType"
        defaultOption="Artwork Type"
        options={["Painting", "Performance", "Photograph", "Song", "Video", "Writing"]}
        onChange={handleInputChange}
      />
      <Input type="text" id="title" placeholder="Title" onChange={handleInputChange} />
      {formData.artworkType === "Painting" && <PaintingOptions onChange={handleInputChange} />}
      {formData.artworkType === "Performance" && (
        <PerformanceOptions onChange={handleInputChange} />
      )}{" "}
      {formData.artworkType === "Photograph" && <PhotographOptions onChange={handleInputChange} />}
      {formData.artworkType === "Song" && <SongOptions onChange={handleInputChange} />}
      {formData.artworkType === "Video" && <VideoOptions onChange={handleInputChange} />}
      {formData.artworkType === "Writing" && <WritingOptions onChange={handleInputChange} />}
      <textarea name="artistStatement" id="artistStatement" onChange={handleInputChange} />
      <SubmitButton name="Submit" />
    </Form>
    
  );
};

export default SubmitArtwork;
