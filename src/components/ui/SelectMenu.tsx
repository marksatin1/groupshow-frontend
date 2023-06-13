import { SelectMenuProps } from "../../typing/UIPropTypes";

const SelectMenu: React.FC<SelectMenuProps> = ({ id, defaultOption, options, onChange }) => {
  const selectOptions = options.map(option => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  return (
    <>
      <select name={id} id={id} defaultValue="default" onChange={onChange}>
        <option value="default" disabled>
          {defaultOption}
        </option>
        {selectOptions}
      </select>
    </>
  );
};

export default SelectMenu;
