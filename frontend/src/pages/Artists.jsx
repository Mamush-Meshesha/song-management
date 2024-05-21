import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSong } from "../slice/songSlice";
import { Container, EachArtist, Table, Titl } from "../styled/page/ArtistStyle";
const Artists = () => {
  const songs = useSelector(state => state.song.song)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSong())
  },[dispatch])
  return (
    <Container>
      <Titl>
        <h1>All songs</h1>
      </Titl>
      <EachArtist
      >
        {songs.map((song, index) => (
          <Table
            key={index}
          >
            {index + 1}.  <h1>{song.Artist}</h1>
          </Table>
        ))}
      </EachArtist>
  </Container>
  );
};

export default Artists;
