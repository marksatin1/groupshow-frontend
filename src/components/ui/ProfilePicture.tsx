const ProfilePicture: React.FC<any> = ({ className }) => {
  return (
    <div className="profile-pic">
      <img
        className={className}
        src="https://media.zenfs.com/en/nerdist_761/054513345eeb914fb324da0bf6372c3a"
        alt=""
      />
    </div>
  );
};

export default ProfilePicture;
