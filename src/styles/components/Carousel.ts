import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 70rem;
  min-width: 100%;

  img {
    max-width: 98%;
    max-height: 98%;
    margin: 0 0.5rem 0.5rem;
    box-shadow: 0 0 15px #000;
    border-radius: 1%;
  }
`;

export const ButtonBackContainer = styled.div`
  color: #fffafa;
  position: fixed;
  top: 50%;
  left: 3%;
  z-index: 5;

  button {
    color: #fffafa;
    font-size: 5rem;
    border: 0;
    background-color: transparent;
    margin: 0 0.5rem 0.5rem;
    transition: 400ms;
    :hover {
      color: #da8371;
    }
  }
`;

export const ButtonNextContainer = styled.div`
  color: #fffafa;
  position: fixed;
  top: 50%;
  right: 3%;
  z-index: 5;

  button {
    color: #fffafa;
    font-size: 5rem;
    border: 0;
    background-color: transparent;
    margin: 0 0.5rem 0.5rem;
    transition: 400ms;
    :hover {
      color: #da8371;
    }
  }
`;
