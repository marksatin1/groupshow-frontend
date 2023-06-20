import { FormProps } from "../../typing/UIPropTypes";

const Form: React.FC<FormProps> = ({ title, onSubmit, children }) => {
  return (
    <div className="form">
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};

export default Form;
