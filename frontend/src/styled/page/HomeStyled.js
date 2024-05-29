import styled from "@emotion/styled"

const Container = styled.div`
  background-color: #3a3c42;
  min-height: 97vh;
  width: 80%;
  margin-left: 20%;
  @media (max-width: 640px) {
  body {
    width: 100%;
  }
}

@media (min-width: 641px) {
  body {
    
    margin-right: 0.75rem;
  }
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