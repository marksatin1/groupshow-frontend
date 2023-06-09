import React from "react";

type SubmitButtonProps = {
  name: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ name }) => {
  return <button type="submit">{name}</button>;
};

export default SubmitButton;
