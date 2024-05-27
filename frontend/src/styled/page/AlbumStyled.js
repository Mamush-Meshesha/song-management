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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 0 10%;
`;

const Box = styled.button`
  height: 200px;
  border-radius: 6px;
  background-color: black;
  color: white;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { AlbumStyled, Pad, Placed, Box };
