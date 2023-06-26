import ProfilePicture from "./ProfilePicture";

const Comment = () => {
  return (
    <div className="comment-container">
      <ProfilePicture className="pic-size" />
      <p className="content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi ipsam dolorem
        fugit, eligendi quae, accusantium rem provident quo cum hic repellat temporibus error ipsum
        recusandae magnam sed, excepturi corporis?
      </p>
    </div>
  );
};

export default Comment;
