import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSong, fetchSongByGenresRequest } from "../slice/songSlice";
import { AlbumStyled, Box, Pad, Placed } from "../styled/page/AlbumStyled";
import { useNavigate } from "react-router-dom";
const Genres = () => {
  const songs = useSelector((state) => state.song.song);
  const totalSong = useSelector((state) => state.song.genres.totalSong);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGenresName = (genres) => {
    dispatch(fetchSongByGenresRequest(genres));
    navigate(`/genres/${genres}`);
  };

  useEffect(() => {
    dispatch(fetchSong());
  }, [dispatch]);
  return (
    <AlbumStyled>
      <Pad>
        <h1 className="text-3xl text-white">Genres</h1>
      </Pad>
      <Placed>
        {songs.map((song, index) => (
          <Box
            onClick={() => handleGenresName(song.Genres)}
            key={index}
            style={{ backgroundImage: `url("/music2.jpg")` }}
          >
            <div>
              <h1 className="text-2xl capitalize" key={index}>
                {song.Genres} ( <span>{totalSong}</span>)
              </h1>
              <p className="text-sm text-[#e1e6dad5] py-2">{song.Title}</p>
              <p className="text-sm text-[#bdbeb3]">{song.Album}</p>
            </div>
          </Box>
        ))}
      </Placed>
    </AlbumStyled>
  );
};

export default Genres;
