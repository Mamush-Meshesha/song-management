import styled from "@emotion/styled";

const AlbumStyled = styled.div`
  width: 79%;
  margin-left: 20%;
  background-color: #132040;
  margin-right: 0.75rem;
  border-radius: 0.5rem;
  height: 97vh;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
