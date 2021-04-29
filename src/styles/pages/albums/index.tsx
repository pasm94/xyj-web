import styled from 'styled-components';

export const Container = styled.div`
  max-width: 70rem;
  width: 70rem;
  margin: 0 auto;
  /* margin-left: 5rem; */
  /* margin-right: 5rem; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;

    #firstAlbum {
      margin-top: 21rem;
    }
  }
`;

export const Album = styled.div`
  margin-left: 2rem;
  @media (max-width: 480px) {
    margin-top: 5rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 500ms;

  :hover {
    cursor: pointer;
    transform: scale(0.92, 0.92);
    color: #da8371;
  }
`;

export const AlbumTitle = styled.span`
  font-size: 3rem;
  @media (max-width: 480px) {
    font-size: 6rem;
  }
`;

export const AlbumImage = styled.img`
  margin-top: 2rem;
  width: 21rem;
  height: 15rem;
  border-radius: 3%;
  box-shadow: 0 0 15px #000;

  @media (max-width: 480px) {
    height: 100%;
    width: 70%;
  }
`;
