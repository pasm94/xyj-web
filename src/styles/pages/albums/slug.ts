import styled from 'styled-components';

export const Container = styled.div`
  max-width: 70rem;
  width: 70rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  @media (max-width: 480px) {
    margin-top: 19rem;
  }

  display: flex;
  align-items: center;
  border-radius: 2rem;
  margin-bottom: 1rem;

  span {
    font-size: 4rem;
  }
`;

export const Photos = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* grid-gap: 1rem; */
  max-width: 70rem;
  padding-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Image = styled.img`
  max-width: 22rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 3%;
  box-shadow: 0 0 15px #000;

  transition: 500ms;

  :hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 480px) {
    max-width: 34rem;
  }
`;
