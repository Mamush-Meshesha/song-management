import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSong, fetchSongByArtistRequest } from "../slice/songSlice";
import { AlbumStyled, Box, Pad, Placed } from "../styled/page/AlbumStyled";
import { useNavigate } from "react-router-dom";
import { Container } from "../styled/page/HomeStyled";
const Artists = () => {
  const songs = useSelector((state) => state.song.song);
    const totalSong = useSelector((state) => state.song.artist.totalSong);  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleArtistName = (artist) => {
    dispatch(fetchSongByArtistRequest(artist));
    navigate(`/artist/${artist}`);
  };

  useEffect(() => {
    dispatch(fetchSong());
  }, [dispatch]);
  return (
    <Container>
      <AlbumStyled>
        <Pad>
          <h1 className="text-3xl text-white">Artists</h1>
        </Pad>
        <Placed>
          {songs.map((song, index) => (
            <Box
              onClick={() => handleArtistName(song.Artist)}
              key={index}
              style={{ backgroundImage: `url("/music2.jpg")` }}
            >
              <div>
                <h1 className="text-2xl capitalize" key={index}>
                  {song.Artist} ( <span>{totalSong}</span>)
                </h1>
                <p className="text-sm text-[#e1e6dad5] py-2">{song.Title}</p>
                <p className="text-sm text-[#bdbeb3]">{song.Album}</p>
              </div>
            </Box>
          ))}
        </Placed>
      </AlbumStyled>
    </Container>
  );
};

export default Artists;
