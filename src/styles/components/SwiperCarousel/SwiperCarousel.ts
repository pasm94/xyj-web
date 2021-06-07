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

  @media (max-width: 1080px) {
    height: 50vh;
  }

  @media (max-width: 740px) {
    height: 75vh;
  }

  @media (max-width: 480px) {
    height: 70vh;
  }

  @media (max-width: 370px) {
    height: 80vh;
  }

  @media (orientation: landscape) {
    height: 70vh;

    @media (max-width: 1080px) {
      height: 90vh;
    }

    @media (max-width: 740px) {
      height: 120vh;
    }

    @media (max-width: 480px) {
      height: 100vh;
    }
  }
`;
