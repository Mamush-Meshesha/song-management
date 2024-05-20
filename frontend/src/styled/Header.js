import styled from "@emotion/styled"

const Headers = styled.div`
  width: 18%;
  background-color: green;
  position: fixed;
  z-index: 40;
border-radius: 6px;
`;
const Order = styled.div`
    display: flex;
    flex-direction: column;
    hieght: 85%;
    gap: 20px;
    padding: 40px
`
const AddSongButton = styled.h1`
    @media (min-width : 640px){
        addSongButton {
            display: block
        }
    }
`;
export {Headers, Order, AddSongButton}