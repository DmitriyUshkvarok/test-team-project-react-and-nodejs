import authSelector from '../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { useGetPetsQuery } from '../../../redux/petsApi/petsApi';
import { useDeletePetsMutation } from '../../../redux/petsApi/petsApi';
import { HiTrash } from 'react-icons/hi';
import { differenceInYears } from 'date-fns';
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
  WrapAgeAndPrice,
} from './NoticeCategoryItem.styled';

const getYearDifference = (date) => {
  const currentDate = new Date();
  const parsedDate = new Date(date);

  const difference = differenceInYears(currentDate, parsedDate);

  return `${difference} years`;
};

const NoticeCategoryItem = () => {
  const { data, isLoading, error } = useGetPetsQuery();

  const [deletePet] = useDeletePetsMutation();

  const isLoggetIn = useSelector(authSelector.getIsLoggedIn);

  const userId = useSelector(authSelector.getid);

  const handleDeleteCard = async (id) => {
    const res = await deletePet(id);
  };

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
                  <WrapAgeAndPrice>
                    <DescTitlePet>
                      Age: <span>{getYearDifference(pet.birthday)}</span>
                    </DescTitlePet>
                    {pet.price && (
                      <DescTitlePet>
                        Price: <span>{pet.price} $</span>
                      </DescTitlePet>
                    )}
                  </WrapAgeAndPrice>
                </WrapDescCardPet>
                <WrapBtnDeleteAndLearnMore>
                  <BtnLearnMore>Learn more</BtnLearnMore>
                  {isLoggetIn && userId === pet.owner && (
                    <BtnDelete onClick={() => handleDeleteCard(pet._id)}>
                      Delete <HiTrash color="#FF6101" size={16} />
                    </BtnDelete>
                  )}
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
