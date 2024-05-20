import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {  fetchSongByAlbumRequest } from "../slice/songSlice";
import { Link } from "react-router-dom";
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
    <div className="w-[79%] ml-[20%] bg-secondary mx-3 rounded-lg  h-[97vh] my-4">
      <div className="flex justify-center pt-20 pb-10">
        <h1 className="text-3xl">Albums</h1>
      </div>
      <div className="grid grid-cols-4 gap-3 mx-[10%]">
        {songs.map((song, index) => (
          <motion.button onClick={() =>handleAlbumName(song.Album)}
            key={index}
            whileTap={{ scale: 0.9 }}
            className="h-[200px] rounded-md bg-primary text-white shadow-md"
            style={{ backgroundImage: `url("/music2.jpg")` }}
          >
            <Link to="/name">
              <h1 className="text-2xl capitalize" key={index}>
                {song.Album}
              </h1>
              <p className="text-sm text-[#4f4848] py-2">{song.Artist}</p>
              <p className="text-sm text-[#4f4848]">{song.Album}</p>
            </Link>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Albums;
