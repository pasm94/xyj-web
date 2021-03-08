import styled from "styled-components";

export const Container = styled.div`
  padding-top: 1rem;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  /* img {
    object-fit: scale-down;
    background-color: #282828;
  } */
`;

export const Photos = styled.div`
  display: flex;

  flex: 1;

  width: 100%;
  padding-left: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: unset;
  }

  img {
    margin: 0 0.5rem 0.5rem;
    box-shadow: 0 0 15px #000;
    border-radius: 3%;
    width: 30%;
    height: 30%;

    transition: 500ms;

    @media (max-width: 480px) {
      width: 49%;
      height: 49%;
    }

    :hover {
      transform: scale(0.9, 0.9);
    }
  }
`;

export const CloseButton = styled.span`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 90px;
  right: 311px;
  z-index: 5;

  :hover {
    svg {
      width: 110%;
      height: 110%;
    }
  }

  svg {
    transition: color 350ms;
    color: #6a6a6a;

    :hover {
      color: #9e9796;
    }
  }
`;

