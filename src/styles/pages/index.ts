import styled from "styled-components";

export const Container = styled.div`
  padding-top: 1rem;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: scale-down;
    background-color: #282828;
  }
`;

export const Photos = styled.div`
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
    padding: 0 0.5rem 0.5rem;

    width: 32%;
    height: 32%;

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
  position: relative;
  margin-bottom: 39%;
  left: 69%;
  color: #6a6a6a;
  z-index: 5;
`;
