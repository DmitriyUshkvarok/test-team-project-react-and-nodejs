import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 288px;
  height: 42px;

  margin: 0 auto;
  padding: 20px 16px 0 16px;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 48px;

    padding: 28px 32px 0 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1248px;
    height: 48px;

    padding: 20px 16px 0 16px;
  }
`;
