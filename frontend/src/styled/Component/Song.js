import styled from "@emotion/styled"

const Song = styled.div`
    padding: 0 0 4rem 0
`
const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: white;
  text-transform: Capitalized;
  padding: 20px 0;
  font-size: 20px;

  @media  (max-width: 640px){
    
  }

  @me
  
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
  width: 100%;

  @media (min-width: 390px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 884px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1594) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
export {Song, Head, Placed, Inner, EachSong}