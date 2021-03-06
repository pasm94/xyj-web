import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 70rem;
  width: 70rem;
  margin: 0 auto;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
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

  @media (max-width: 480px) {
    margin-top: 21rem;
    margin: 19rem 1rem 0 1rem;
  }
`;

export const CloseButton = styled.span`
  cursor: pointer;
  font-size: 3rem;
  color: #fffafa;

  position: fixed;
  top: 15%;
  right: 5.5%;
  z-index: 5;

  svg {
    transition: 300ms;
  }

  :hover {
    svg {
      color: #da8371;
    }
  }

  @media (max-width: 480px) {
    font-size: 8rem;
    top: 22%;
  }
`;

export const Image = styled.img`
  /* margin: 1rem 0rem 0rem 1rem;*/
  box-shadow: 0 0 15px #000;
  border-radius: 3%;
  /* width: 100%; */
  /* height: 100%; */
  max-width: 22rem;
  margin-bottom: 2rem;

  transition: 500ms;

  :hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 480px) {
    max-width: 33rem;
  }
`;

export const CarouselContent = styled.div`
  position: fixed;
  text-align: center;
  transition: 500ms ease-out;
  transition: transform 500ms ease;
  top: 7rem;
  visibility: hidden;
  width: 100%;

  @media (max-width: 480px) {
    top: 32%;
  }

  transform: translateX(-100%);
`;

export const GoTopButton = styled.div`
  cursor: pointer;
  font-size: 3rem;
  color: #fffafa;

  position: fixed;
  bottom: 1rem;
  right: 3%;
  z-index: 5;

  svg {
    transition: 300ms;
  }

  :hover {
    svg {
      color: #da8371;
    }
  }
`;
