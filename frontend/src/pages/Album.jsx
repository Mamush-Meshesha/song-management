import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {  fetchSongByAlbumRequest } from "../slice/songSlice";
import { Link } from "react-router-dom";
import { AlbumStyled, Box, Pad, Placed } from "../styled/page/AlbumStyled";
const Albums = () => {
  const songs = useSelector(state => state.song.song)
  const dispatch = useDispatch()

  const handleAlbumName = () => {
        dispatch(fetchSongByAlbumRequest());

  }

  useEffect(() => { 
    dispatch(fetchSongByAlbumRequest())
  }, [dispatch])
  return (
    <AlbumStyled>
      <Pad>
        <h1 className="text-3xl">Albums</h1>
      </Pad>
      <Placed>
        {songs.map((song, index) => (
          <Box onClick={() =>handleAlbumName(song.Album)}
            key={index}
            whileTap={{ scale: 0.9 }}
            
            style={{ backgroundImage: `url("/music2.jpg")` }}
          >
            <Link to="/name">
              <h1 className="text-2xl capitalize" key={index}>
                {song.Album}
              </h1>
              <p className="text-sm text-[#4f4848] py-2">{song.Artist}</p>
              <p className="text-sm text-[#4f4848]">{song.Album}</p>
            </Link>
          </Box>
        ))}
      </Placed>
    </AlbumStyled>
  );
};

export default Albums;
