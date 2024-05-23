import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {  fetchSong, fetchSongByAlbumRequest } from "../slice/songSlice";
import { AlbumStyled, Box, Pad, Placed } from "../styled/page/AlbumStyled";
import { useNavigate } from "react-router-dom";
const Albums = () => {
  const songs = useSelector(state => state.song.song)
  const totalSong = useSelector(state => state.song.album.totalSong)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAlbumName = (album) => {
        dispatch(fetchSongByAlbumRequest(album));
        navigate(`/album/${album}`);
  }

  useEffect(() => { 
    dispatch(fetchSong())
  }, [dispatch])
  return (
    <AlbumStyled>
      <Pad>
        <h1 className="text-3xl">Albums</h1>
      </Pad>
      <Placed>
        {songs.map((song, index) => (
          <Box
            onClick={() => handleAlbumName(song.Album)}
            key={index}
            style={{ backgroundImage: `url("/music2.jpg")` }}
          >
            <div>
              <h1 className="text-2xl capitalize" key={index}>
                {song.Album} ( <span>{totalSong}</span>)
              </h1>
              <p className="text-sm text-[#4f4848] py-2">{song.Artist}</p>
              <p className="text-sm text-[#4f4848]">{song.Album}</p>
            </div>
          </Box>
        ))}
      </Placed>
    </AlbumStyled>
  );
};

export default Albums;
