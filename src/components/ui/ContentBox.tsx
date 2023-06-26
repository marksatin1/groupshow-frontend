const ContentBox: React.FC<any> = ({ title, content }) => {
  return (
    <div className="content-box">
      <div className="content-box--title">
        <p>{title}</p>
      </div>
      <div className="content-box--content">{content}</div>
    </div>
  );
};

export default ContentBox;
