import {
  RadioButtonLabel,
  RadioButtonInput,
  LabelStyled,
  TitleRadioBtn,
} from './PetsModal.styled';
import { ErrorMessageStyledRadioBtn } from '../../Common.styled';

export const CustomRadioButton = ({
  value,
  name,
  label,
  handleRadioChange,
  actual,
}) => {
  const isChecked = value === name;

  return (
    <RadioButtonLabel style={{ ...actual }} checked={isChecked}>
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

export const CustomRadioButtonStepTwo = ({
  width,
  height,
  iconSrc,
  label,
  ...props
}) => {
  return (
    <LabelStyled>
      <img width={width} height={height} src={iconSrc} alt="Icon" />
      <RadioButtonInput type="radio" {...props} />
      <ErrorMessageStyledRadioBtn name="sex" component="div" />
      <TitleRadioBtn>{label}</TitleRadioBtn>
    </LabelStyled>
  );
};
