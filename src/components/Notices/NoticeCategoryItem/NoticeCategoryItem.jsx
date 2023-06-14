import authSelector from '../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
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

  const isLoggetIn = useSelector(authSelector.getIsLoggedIn);

  // const userId = useSelector(authSelector.getid);

  // console.log(isLoggetIn);
  // console.log(userId);

  if (error) {
    return <p>{error.mesage}</p>;
  }
  return (
    <ListCardPet>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map(
          ({
            _id,
            status,
            imagePet,
            name,
            title,
            breed,
            location,
            birthday,
            owner,
          }) => {
            return (
              <ItemCardPet key={_id}>
                <WrapImg>
                  <BtnFavorite>
                    <svg width="24" height="22">
                      <use xlinkHref={`${like}#icon-like`} />
                    </svg>
                  </BtnFavorite>
                  <TitleStatus>{status}</TitleStatus>
                  <ImgPetCard
                    width={280}
                    height={280}
                    src={`https://pets-shelter-service.onrender.com/${imagePet}`}
                    alt={name}
                  />
                </WrapImg>
                <WrapContentItemCard>
                  <TitleCardItem>{title}</TitleCardItem>
                  <WrapDescCardPet>
                    <DescTitlePet>
                      Breed: <span>{breed}</span>
                    </DescTitlePet>
                    <DescTitlePet>
                      Place: <span>{location}</span>
                    </DescTitlePet>
                    <DescTitlePet>
                      Age: <span>{birthday}</span>
                    </DescTitlePet>
                  </WrapDescCardPet>
                  <WrapBtnDeleteAndLearnMore>
                    <BtnLearnMore>Learn more</BtnLearnMore>
                    {isLoggetIn && (
                      <BtnDelete>
                        Delete <HiTrash color="#FF6101" size={16} />
                      </BtnDelete>
                    )}
                  </WrapBtnDeleteAndLearnMore>
                </WrapContentItemCard>
              </ItemCardPet>
            );
          }
        )
      )}
    </ListCardPet>
  );
};

export default NoticeCategoryItem;
