import { FormPropTypes } from "../../types/FormPropTypes";

const Form: React.FC<FormPropTypes> = ({ title, onSubmit, children }) => {
  return (
    <div className="form-container">
      <div className="form">
        <h1>{title}</h1>
        <form onSubmit={onSubmit}>{children}</form>
      </div>
    </div>
  );
};

export default Form;
