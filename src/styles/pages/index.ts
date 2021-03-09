import { IoIosArrowDropupCircle } from "react-icons/io";
import styled, { css } from "styled-components";

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
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;

  margin-bottom: 2rem;
  padding-left: 3rem;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: unset;
  }

  ${(props) =>
    props.isCaroselOpen &&
    css`
      filter: blur(3px);
    `}
`;

export const CloseButton = styled.span<CloseButtonProps>`
  ${(props) =>
    props.visible &&
    css`
      visibility: hidden;
    `}

  cursor: pointer;
  font-size: 3rem;
  color: #fffafa;

  position: fixed;
  top: 13%;
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

export const Image = styled.img`
  margin: 1rem 0rem 0rem 1rem;
  box-shadow: 0 0 15px #000;
  border-radius: 3%;
  width: 30%;
  height: 30%;

  transition: 500ms;

  @media (max-width: 480px) {
    width: 47%;
    height: 47%;
  }

  :hover {
    transform: scale(0.9, 0.9);
  }
`;

export const CarouselContent = styled.div<CarouselContentProps>`
  position: fixed;
  text-align: center;
  transition: 500ms ease-out;
  transition: transform 500ms ease;

  top: 6rem;
  visibility: hidden;
  width: 100%;

  transform: translateX(-100%);
  ${(props) =>
    props.visible &&
    css`
      transform: translateX(0);
      visibility: visible;
    `}
`;

export const GoTopButton = styled.div<GoTopButtonProps>`
  ${(props) =>
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
