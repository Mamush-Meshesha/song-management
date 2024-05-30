import styled from "@emotion/styled"

const Container = styled.div`
  background-color: #3a3c42;
  min-height: 97vh;
  width: 100vw;
  overflow-x: hidden;
  @media (min-width: 640px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 668px;
  }

  @media (min-width: 884px) {
    max-width: 707.2px;
    margin-left: 20%;
  }

  @media (min-width: 1024px) {
    max-width: 960px;
    margin-left: 20%;
  }

  @media (min-width: 1200px) {
    max-width: 1100px;
    margin-left: 20%;
  }

  @media (min-width: 1280px) {
    max-width: 1024px;
    margin-left: 20%;
  }

  @media (min-width: 1536px) {
    max-width: 1480px;
    margin-left: 20%;
  }
`;
const Players = styled.div`
    background-image: linear-gradient(
    to bottom,
    #0e7182,
    #537075,
    #2f4245
  );
  height: 250px;
  
}

// @media (min-width: 640px) {
//   .your-element {
//     height: 250px;
//   }
`;
export {Container, Players}