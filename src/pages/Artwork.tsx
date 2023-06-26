import ContentBox from "../components/ui/ContentBox";
import NavBar from "../components/ui/NavBar";
import CritiqueBox from "../components/ui/critique/CritiqueBox";

const Artwork = () => {
  return (
    <div className="artwork-container">
      <NavBar />
      <h1>Artwork Title</h1>
      <img
        src="https://az334034.vo.msecnd.net/images-0/the-birth-of-the-virgin-corrado-giaquinto-1606-1528ec6d.jpg"
        alt=""
      />
      <ContentBox
        title="Statement"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. In recusandae magnam, et doloribus
        repellat, doloremque architecto sit perspiciatis nisi, tempore commodi beatae quae minima
        pariatur odit? Voluptatibus at cum doloribus? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. In recusandae magnam, et doloribus repellat, doloremque architecto sit
        perspiciatis nisi, tempore commodi beatae quae minima pariatur odit? Voluptatibus at cum
        doloribus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. In recusandae magnam,
        et doloribus repellat, doloremque architecto sit perspiciatis nisi, tempore commodi beatae
        quae minima pariatur odit? Voluptatibus at cum doloribus? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. In recusandae magnam, et doloribus repellat, doloremque
        architecto sit perspiciatis nisi, tempore commodi beatae quae minima pariatur odit?
        Voluptatibus at cum doloribus?"
      />
      <CritiqueBox />
      <ContentBox
        title="Meta"
        content="doloremque architecto sit perspiciatis nisi, tempore commodi beatae
        quae minima pariatur odit? Voluptatibus at cum doloribus? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. In recusandae magnam, et doloribus repellat, doloremque
        architecto sit perspiciatis nisi, tempore commodi beatae quae minima pariatur odit?
        Voluptatibus at cum doloribus?"
      />
      <ContentBox
        title="About The Artist"
        content="doloremque architecto sit perspiciatis nisi, tempore commodi beatae
        quae minima pariatur odit? Voluptatibus at cum doloribus? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. In recusandae magnam, et doloribus repellat, doloremque
        architecto sit perspiciatis nisi, tempore commodi beatae quae minima pariatur odit?
        Voluptatibus at cum doloribus?"
      />
    </div>
  );
};

export default Artwork;
