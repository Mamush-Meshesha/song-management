import styled from "@emotion/styled"

const Song = styled.div`
    padding: 0 0 4rem 0
`
const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  color: white;
  text-transform: Capitalized;
  padding: 20px 0;
  font-size: 20px;
  padding: 70px 50px 10px;
`;
const Placed = styled.div`
  height: 5rem; 
  width: 100%;
  border-bottom-width: 1px;
  display: flex;
  align-items: center;
  position: absolute;
  background-color: rgba(25, 35, 49, 0.7);
  padding-left: 1.5rem; 
  padding-right: 1.5rem;
`;
const Inner = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-between;    
`
const EachSong = styled.span`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%
`
export {Song, Head, Placed, Inner, EachSong}