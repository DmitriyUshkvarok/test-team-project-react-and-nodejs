import { useGetFetchServiceQuery } from '../../redux/serviceApi/serviceApi';
import { useState } from 'react';
import {
  OurFriendsTitle,
  FriendsList,
  FriendsItem,
  CardInfoContainer,
  FriendsAddress,
  FriendsEmail,
  FriendsImgWrapper,
  FriendsImg,
  FriendsInfoWrapper,
  Span,
  SpanFrom,
  SpanTo,
  TimeContainer,
  AddressContainer,
  EmailContainer,
  PhoneContainer,
  FriendsTimes,
  FriendsPhone,
  FriendsName,
  TimeList,
  TimeListItem,
  TimeListDay,
  TimeListFrom,
  TimeListTo,
} from './OurFriendsPage.styled';

const abbreviateDay = (day) => {
  const abbreviatedDays = {
    Monday: 'MN',
    Tuesday: 'TU',
    Wednesday: 'WE',
    Thursday: 'TH',
    Friday: 'FR',
    Saturday: 'SA',
    Sunday: 'SU',
  };

  return abbreviatedDays[day] || '';
};

const OurFriendsPage = () => {
  const [hovered, setHovered] = useState(null);

  const { data, error, isLoading } = useGetFetchServiceQuery();

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <OurFriendsTitle>Our friends</OurFriendsTitle>
      <FriendsList>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.map(({ address, email, image, name, phone, _id, time }) => (
            <FriendsItem
              key={_id}
              style={{
                position: 'relative',
                zIndex: hovered === _id ? 1 : 'auto',
              }}
            >
              <FriendsName href={name} target="_blank">
                {name}
              </FriendsName>
              <CardInfoContainer>
                <FriendsImgWrapper>
                  <FriendsImg
                    src={`https://pets-shelter-service.onrender.com/${image}`}
                    alt={name}
                  />
                </FriendsImgWrapper>
                <FriendsInfoWrapper>
                  <TimeContainer
                    onMouseEnter={() => setHovered(_id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Span>Time:</Span>
                    <FriendsTimes>
                      {time && time.find((item) => item.day === 'Monday') ? (
                        <>
                          <SpanFrom>
                            {
                              time.find((item) => item.day === 'Monday').time
                                .from
                            }
                            -
                          </SpanFrom>

                          <SpanTo>
                            {time.find((item) => item.day === 'Monday').time.to}
                          </SpanTo>
                        </>
                      ) : (
                        <span>-----------------------------------</span>
                      )}
                    </FriendsTimes>
                  </TimeContainer>
                  <AddressContainer>
                    <Span>Address:</Span>
                    <FriendsAddress>
                      {address ? (
                        address
                      ) : (
                        <span>-----------------------------------</span>
                      )}
                    </FriendsAddress>
                  </AddressContainer>
                  <EmailContainer>
                    <Span>Email:</Span>
                    <FriendsEmail>
                      {email ? (
                        email
                      ) : (
                        <span>-----------------------------------</span>
                      )}
                    </FriendsEmail>
                  </EmailContainer>
                  <PhoneContainer>
                    <Span>Phone:</Span>
                    <FriendsPhone>
                      {' '}
                      {phone ? (
                        phone
                      ) : (
                        <span>-----------------------------------</span>
                      )}
                    </FriendsPhone>
                  </PhoneContainer>
                </FriendsInfoWrapper>
              </CardInfoContainer>
              <TimeList
                style={{
                  opacity: hovered === _id && time && time.length > 0 ? 1 : 0,
                }}
              >
                {time &&
                  time.map(({ day, time }) => (
                    <TimeListItem key={day}>
                      <TimeListDay>{abbreviateDay(day)}</TimeListDay>
                      <TimeListFrom>{time.from}-</TimeListFrom>
                      <TimeListTo>{time.to}</TimeListTo>
                    </TimeListItem>
                  ))}
              </TimeList>
            </FriendsItem>
          ))
        )}
      </FriendsList>
    </>
  );
};

export default OurFriendsPage;
