import styled from "@emotion/styled";

const AlbumStyled = styled.div`

  background-color: #3a3c42
  margin-right: 0.75rem;
  border-radius: 0.5rem;
  height: 100vh;
`;

const Pad = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0 40px 0;
`;
const Placed = styled.div`
  gap: 12px;
  margin: 0 5%;
  display: grid;
  gap: 20px;
  border-radius: 6px;
  color: white;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.5);
  padding: 40px;

  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 884px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1594px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Box = styled.button`
display: flex;
align-items: center;
justify-content: center;
height: 200px;
border-radius: 6px;
`;


export { AlbumStyled, Pad, Placed, Box };
