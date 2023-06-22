import authSelector from '../../../redux/auth/authSelectors';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetPetsQuery } from '../../../redux/petsApi/petsApi';
import { useDeletePetsMutation } from '../../../redux/petsApi/petsApi';
import { HiTrash } from 'react-icons/hi';
import { getYearDifference } from '../../auxiliaryFunc/getYearDifference';
import like from './img/symbol-defs.svg';
import { useAddFavoritMutation } from '../../../redux/favotitApi/favoritApi';
import {
  LoaderContainer,
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
import LoaderMini from '../../LoaderMini/LoaderMini';
import PropTypes from 'prop-types';

const NoticeCategoryItem = ({
  cards,
  searchText,
  handleClickModalLearnMore,
}) => {
  const isLoggetIn = useSelector(authSelector.getIsLoggedIn);

  const userId = useSelector(authSelector.getid);

  const [isPetDeleted, setIsPetDeleted] = useState(null);

  const { isLoading, error } = useGetPetsQuery();

  const [addedFavorit] = useAddFavoritMutation();

  const [deletePet] = useDeletePetsMutation();

  const handleAddToFavorites = async (petId) => {
    // const pet = cards.find((card) => card._id === petId);

    await addedFavorit(userId, petId);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleDeleteCard = async (id) => {
    await deletePet(id);
    setIsPetDeleted(id);
  };

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <ListCardPet>
      {isLoading ? (
        <LoaderContainer>
          <LoaderMini />
        </LoaderContainer>
      ) : (
        filteredCards?.map((pet) => {
          return (
            <ItemCardPet key={pet._id}>
              <WrapImg>
                <BtnFavorite onClick={() => handleAddToFavorites(pet._id)}>
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
                  <BtnLearnMore
                    onClick={() => handleClickModalLearnMore(pet._id)}
                  >
                    Learn more
                  </BtnLearnMore>
                  {isLoggetIn && userId === pet.owner && (
                    <BtnDelete onClick={() => handleDeleteCard(pet._id)}>
                      {isPetDeleted === pet._id ? (
                        'Deleted...'
                      ) : (
                        <>
                          Delete
                          <HiTrash style={{ color: '#FF6101' }} size={16} />
                        </>
                      )}
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

NoticeCategoryItem.propTypes = {
  cards: PropTypes.array,
  searchText: PropTypes.string,
};

export default NoticeCategoryItem;
