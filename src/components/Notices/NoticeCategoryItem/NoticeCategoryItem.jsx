import { useGetPetsQuery } from '../../../redux/petsApi/petsApi';
import { HiTrash } from 'react-icons/hi';
import like from './img/symbol-defs.svg';
import {
  WrapImg,
  BtnFavorite,
  TitleStatus,
  ItemCardPet,
  WrapContentItemCard,
  TitleCardItem,
  ListCardPet,
  WrapDescCardPet,
  DescTitlePet,
  WrapBtnDeleteAndLearnMore,
  BtnLearnMore,
  BtnDelete,
  ImgPetCard,
} from './NoticeCategoryItem.styled';
const NoticeCategoryItem = () => {
  const { data, isLoading, error } = useGetPetsQuery();

  if (error) {
    return <p>{error.mesage}</p>;
  }
  return (
    <ListCardPet>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((pet) => {
          return (
            <ItemCardPet key={pet._id}>
              <WrapImg>
                <BtnFavorite>
                  <svg width="24" height="22">
                    <use xlinkHref={`${like}#icon-like`} />
                  </svg>
                </BtnFavorite>
                <TitleStatus>{pet.status}</TitleStatus>
                <ImgPetCard
                  width={280}
                  height={280}
                  src={`https://pets-shelter-service.onrender.com/${pet.imagePet}`}
                  alt={pet.name}
                />
              </WrapImg>
              <WrapContentItemCard>
                <TitleCardItem>{pet.title}</TitleCardItem>
                <WrapDescCardPet>
                  <DescTitlePet>
                    Breed: <span>{pet.breed}</span>
                  </DescTitlePet>
                  <DescTitlePet>
                    Place: <span>{pet.location}</span>
                  </DescTitlePet>
                  <DescTitlePet>
                    Age: <span>{pet.birthday}</span>
                  </DescTitlePet>
                </WrapDescCardPet>
                <WrapBtnDeleteAndLearnMore>
                  <BtnLearnMore>Learn more</BtnLearnMore>
                  <BtnDelete>
                    Delete <HiTrash color="#FF6101" size={16} />
                  </BtnDelete>
                </WrapBtnDeleteAndLearnMore>
              </WrapContentItemCard>
            </ItemCardPet>
          );
        })
      )}
    </ListCardPet>
  );
};

export default NoticeCategoryItem;
