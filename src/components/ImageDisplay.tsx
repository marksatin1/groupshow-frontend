import { Painting } from "../interfaces/Artwork";

type PaintingProps = {
  painting: Painting;
};

const ImageDisplay: React.FC<PaintingProps> = ({ painting }) => {
  return (
    <div>
      <p>{painting.artworkID}</p>
      <p>{painting.type}</p>
    </div>
  );
};

export default ImageDisplay;
