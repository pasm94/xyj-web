import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 70rem;
  flex-direction: row;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* place-content: center; */

  @media (max-width: 480px) {
    margin-top: 21rem;
    margin: 19rem 1rem 0 1rem;
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  width: 30rem;
  box-shadow: 0 0 15px #000;

  @media (max-width: 480px) {
    width: 50rem;
    margin-bottom: 2rem;
  }
`;

export const ProfileText = styled.span`
  display: flex;
  margin-left: 2rem;

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;
