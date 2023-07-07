import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import Form from "../components/ui/Form";
import SelectMenu from "../components/ui/SelectMenu";
import PaintingOptions from "../components/ui/artwork-options/PaintingOptions";
import PerformanceOptions from "../components/ui/artwork-options/PerformanceOptions";
import PhotographOptions from "../components/ui/artwork-options/PhotographOptions";
import SongOptions from "../components/ui/artwork-options/SongOptions";
import VideoOptions from "../components/ui/artwork-options/VideoOptions";
import WritingOptions from "../components/ui/artwork-options/WritingOptions";
import { ISubmitArtworkForm } from "../interfaces/Forms";
import ArtworkContext from "../context/ArtworkContext";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/ui/NavBar";

const SubmitArtwork = () => {
  const { user } = useContext(AuthContext);
  const { submitArtwork } = useContext(ArtworkContext);
  const [formData, setFormData] = useState<ISubmitArtworkForm>({
    artistID: user?.userID!,
    artworkType: "",
    title: "",
    artistStatement: "",
    isOpenForCritique: false,
    bucketUrl: "TEST_URL",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitArtwork({ submitArtworkFormData: formData });
  };

  return (
    <>
      <NavBar />
      <Form title="Submit Your Art!" onSubmit={handleFormSubmission}>
        <hr />
        {/* <Input type="file" id="bucketUrl" autocomplete="bucketUrl" onChange={handleInputChange} /> */}
        <Input
          type="text"
          id="bucketUrl"
          placeholder="URL"
          autocomplete="bucketUrl"
          onChange={handleInputChange}
        />
        <SelectMenu
          id="artworkType"
          defaultOption="Artwork Type"
          options={["PAINTING", "PERFORMANCE", "PHOTOGRAPH", "SONG", "VIDEO", "WRITING"]}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          id="title"
          placeholder="Title"
          autocomplete="title"
          onChange={handleInputChange}
        />
        {formData.artworkType === "PAINTING" && <PaintingOptions onChange={handleInputChange} />}
        {formData.artworkType === "PERFORMANCE" && (
          <PerformanceOptions onChange={handleInputChange} />
        )}{" "}
        {formData.artworkType === "PHOTOGRAPH" && (
          <PhotographOptions onChange={handleInputChange} />
        )}
        {formData.artworkType === "SONG" && <SongOptions onChange={handleInputChange} />}
        {formData.artworkType === "VIDEO" && <VideoOptions onChange={handleInputChange} />}
        {formData.artworkType === "WRITING" && <WritingOptions onChange={handleInputChange} />}
        <textarea
          placeholder="Artist's Statement"
          name="artistStatement"
          id="artistStatement"
          onChange={handleInputChange}
        />
        <p>Open For Critique? Yes / No</p>
        {/* <RadioBox id="isOpenForCritique" options={["True", "False"]} onChange={handleInputChange} /> */}
        <SubmitButton name="Submit" />
      </Form>
    </>
  );
};

export default SubmitArtwork;
