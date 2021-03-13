import styled, { css } from 'styled-components';

interface PhotosProps {
  isCaroselOpen: boolean;
}

interface CarouselContentProps {
  visible: boolean;
}

interface CloseButtonProps {
  visible: boolean;
}

interface GoTopButtonProps {
  visible: boolean;
}

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Photos = styled.div<PhotosProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding-bottom: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 21rem;
    grid-gap: 2rem;
    margin: 19rem 1rem 0 1rem;
    #ajustImg {
      grid-area: 5 / 1 / span 2 / span 2;
    }
  }

  ${props =>
    props.isCaroselOpen &&
    css`
      filter: blur(10px);
    `}
`;

export const CloseButton = styled.span<CloseButtonProps>`
  ${props =>
    props.visible &&
    css`
      visibility: hidden;
    `}

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
  width: 100%;
  height: 100%;

  transition: 500ms;

  :hover {
    transform: scale(0.9, 0.9);
  }
`;

export const CarouselContent = styled.div<CarouselContentProps>`
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
  ${props =>
    props.visible &&
    css`
      transform: translateX(0);
      visibility: visible;
    `}
`;

export const GoTopButton = styled.div<GoTopButtonProps>`
  ${props =>
    !props.visible &&
    css`
      visibility: hidden;
    `}

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
