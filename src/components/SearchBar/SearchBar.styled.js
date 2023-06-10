import styled from 'styled-components';

export const FormSearch = styled.form`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const InputContainer = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    width: 280px;
    height: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    height: 44px;
  }
`;

export const InputSearch = styled.input`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--whiteColor);
    box-shadow: var(--boxShadowFormRegistr);
    border-radius: var(--borderRadius20);
    border: none;
    padding-left: 10px;
    font-size: var(--fontSize16);

    &::placeholder {
      font-family: var(--manropeFont);
      font-weight: var(--fontWeight500);
      font-size: var(--fontSize16);
      line-height: 1.33;
      letter-spacing: 0.04em;
      color: var(--placeholderColor);
      padding-left: 12px;
    }

    &:focus {
      outline: none;
    }
  }

  @media screen and (min-width: 768px) {
    &::placeholder {
      font-size: var(--fontSize20);
    }
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-10px, -50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-10px, -50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
