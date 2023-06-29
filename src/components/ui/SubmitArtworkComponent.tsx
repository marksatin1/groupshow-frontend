import React from 'react'
import { ISubmitArtworkForm } from '../../interfaces/Forms'
import { ChangeEvent, useState } from 'react';
import Form from './Form';
import SelectMenu from './SelectMenu';
import Input from './Input';
import PaintingOptions from './options/PaintingOptions';
import PerformanceOptions from './options/PerformanceOptions';
import PhotographOptions from './options/PhotographOptions';
import SongOptions from './options/SongOptions';
import VideoOptions from './options/VideoOptions';
import WritingOptions from './options/WritingOptions';
import SubmitButton from './SubmitButton';

const SubmitArtwork: React.FC<ISubmitArtworkForm> = ({isOpen, closeModal}) => {

  const [formData, setFormData] = useState<ISubmitArtworkForm>({
    artworkType: "",
    title: "",
    artistStatement: "",
    isOpenForCritique: "",
    fileUrl: "",
    isOpen: false,
    closeModal
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();

    console.log(formData);

    // submit artwork method via artworkContext

    closeModal();
  };
  return (
    <div className={`modal ${isOpen ? '' : 'hidden'}`}>
      <button className="close-modal" onClick={closeModal}>
        &times;
      </button>
      <Form title="Submit Your Art!" onSubmit={handleFormSubmission}>
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
    </div>
  )
}

export default SubmitArtwork