import { RadioButtonLabel, RadioButtonInput } from './PetsModal.styled';

const CustomRadioButton = ({ value, name, label, handleRadioChange }) => {
  const isChecked = value === name;

  return (
    <RadioButtonLabel checked={isChecked}>
      <RadioButtonInput
        onClick={(e) => handleRadioChange(e)}
        type="radio"
        name={name}
        value={value}
      />
      <p>{label}</p>
    </RadioButtonLabel>
  );
};

export default CustomRadioButton;
