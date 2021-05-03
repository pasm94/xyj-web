import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  /* height: 28rem; */
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const Photo = styled.img`
  /* width: 60%; */
  height: 80vh;

  @media (max-width: 740px) {
    height: 110vh;
  }

  @media (max-width: 480px) {
    height: 70vh;
  }
`;
