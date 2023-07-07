import {
  ModalContainer,
  ImgPetCard,
  TitleStatus,
  WrapImg,
  Title,
  Box,
  BoxText,
  BoxChip,
  Text,
  Chip,
  ChipEmailPhone,
  TextComments,
  ChipComments,
  Btn,
  ChipText,
  SecondBlock,
  ThirdBlock,
  FourthBlock,
} from './ModalLearnMore.styled';
import { AiFillHeart } from 'react-icons/ai';

const ModalLearnMore = (cardFind, { handleMoreClose }) => {
  console.log(cardFind);

  const {
    cardFind: {
      status,
      imagePet,
      name,
      birthday,
      breed,
      location,
      sex,
      price,
      comments,
    },
  } = cardFind;

  return (
    <>
      {cardFind && (
        <ModalContainer>
          <WrapImg>
            <ImgPetCard
              src={`https://pets-shelter-service.onrender.com/${imagePet}`}
              alt={name}
            />
            <TitleStatus>{status}</TitleStatus>
          </WrapImg>

          <SecondBlock>
            <Title>Сute dog looking for a home</Title>
            <Box>
              <BoxText>
                <Text>Name:</Text>
                <Text>Birthday:</Text>
                <Text>Breed:</Text>
                <Text>Place:</Text>
                <Text>The sex:</Text>
                <Text>Email</Text>
                <Text>Phone</Text>
                {price && <Text>Price:</Text>}
              </BoxText>
              <BoxChip>
                <Chip> {name}</Chip>
                <Chip> {birthday}</Chip>
                <Chip> {breed}</Chip>
                <Chip> {location}</Chip>
                <Chip> {sex}</Chip>
                <ChipEmailPhone> Email</ChipEmailPhone>
                <ChipEmailPhone> Phone</ChipEmailPhone>
                {price && <Chip>{price}</Chip>}
              </BoxChip>
            </Box>
          </SecondBlock>
          <ThirdBlock>
            <TextComments>
              Comments:
              <ChipComments>{comments}</ChipComments>
            </TextComments>
          </ThirdBlock>
          <FourthBlock>
            <Btn>Contact</Btn>
            <Btn>
              <ChipText>Add to</ChipText>
              <AiFillHeart />
            </Btn>
          </FourthBlock>
        </ModalContainer>
      )}
    </>
  );
};

export default ModalLearnMore;
