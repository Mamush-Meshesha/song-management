import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiPlay1 } from "react-icons/ci";
import PropTypes from "prop-types";
import Update from "./Update";
import { EachSong, Head, Song } from "../styled/Component/Song";
import { useDispatch, useSelector } from "react-redux";
import { removeSongRequest, updateSongRequest } from "../slice/songSlice";

const Songs = ({ songs, onSelected }) => {
  const [isHovered, setIsHovered] = useState(
    new Array(songs.length).fill(false)
  );

  const selected = useSelector((state) => state.song.selectedSongUrl);
  console.log(selected);
  const navigate = useNavigate();
  const dispatch  = useDispatch()
  const [showList, setShowList] = useState(false);
  const showHandleUpdate = () => {
    // navigate("/edit");
    setShowList(!showList);
  };

  const handleMouseEnter = (index) => {
    const newIsHovered = new Array(songs.length).fill(false);
    // Set hover state for the current song
    newIsHovered[index] = true;
    setIsHovered(newIsHovered);
  };

  const handleMouseLeave = (index) => {
    setIsHovered(isHovered.map((hover, i) => (i === index ? false : hover)));
  };

  const handleEditSong = () => {
    navigate("/edit");
  };
    const handleDeleteSong = (id) => {
      dispatch(removeSongRequest(id));
    };

  Songs.propTypes = {
    songs: PropTypes.arrayOf(
      PropTypes.shape({
        Title: PropTypes.string,
        Artist: PropTypes.string,
        Genres: PropTypes.string,
        Album: PropTypes.string,
        Duration: PropTypes.string,
        Artwork: PropTypes.string,
      })
    ).isRequired,
  };
  return (
    <div className="z-30">
      <div>
        <Head>
          <h1># Title</h1>
          <h1>artist</h1>
          <h1>genres</h1>
          <h1>album</h1>
          <h1>duration</h1>
        </Head>

        <hr className=" text-[#39b298] bg-secondary overflow-x-hidden relative" />
        <div className="text-white ">
          {songs.map((song, index) => (
            <div key={index}>
              <div>
                <span
                  className="border-b border-[#39b298]  flex gap-3 w-full h-20 "
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {/*hovered song */}
                  {isHovered[index] ? (
                    <div className="md:w-[75.7%] w-[80%] absolute  h-20 border-b flex items-center px-6 opacity-90 bg-[#4d4e4c]">
                      <div className="flex w-full justify-between">
                        <button onClick={() => onSelected(song.file)}>
                          <CiPlay1 className="text-xl" />
                        </button>
                        <button
                          onClick={() => {
                            showHandleUpdate();
                          }}
                        >
                          <HiOutlineDotsHorizontal className="text-xl" />
                        </button>
                      </div>
                      {showList && (
                        <div className="flex flex-col absolute top-0 mt-[79px] bg-[#3a3c42] rounded-md w-[10%] gap-6 p-5 border right-0">
                          <button
                            onClick={() => {
                              handleEditSong();
                              onSelected(song);
                            }}
                            className="border rounded-md px-3 h-11"
                          >
                            <div className="flex gap-1 items-center">
                              <FiEdit className="text-green-600" />
                              Edit
                            </div>
                          </button>
                          <button
                            onClick={() => handleDeleteSong(song._id)}
                            className="border rounded-md px-3 h-11"
                          >
                            <div className="flex gap-1 items-center">
                              <MdDelete className="text-red-600 text-2xl" />
                              Delete
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  ) : null}
                  <span className="flex items-center">{index + 1}. </span>
                  <EachSong>
                    <div className="flex gap-2 items-center w-[57%]  overflow-hidden h-full">
                      <img
                        src={song.Artwork ? song.Artwork : "/cov.webp"}
                        className="w-10 rounded-md h-10"
                      />
                      <h1>{song.Title}</h1>
                    </div>
                    <div className="flex items-center overflow-x-hidden">
                      <h1>{song.Artist}</h1>
                    </div>
                    <div className="flex items-center overflow-x-hidden">
                      <h1>{song.Genres}</h1>
                    </div>
                    <div className="flex items-center overflow-x-hidden">
                      <h1>{song.Album}</h1>
                    </div>
                    <div className="items-center hidden md:block overflow-x-hidden">
                      <h1>{song.Duration}</h1>
                    </div>
                  </EachSong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
