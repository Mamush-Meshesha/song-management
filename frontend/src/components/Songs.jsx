import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiPlay1 } from "react-icons/ci";
import PropTypes from "prop-types";
import Update from "./Update";
import { EachSong, Head, Song } from "../styled/Component/Song";
import { useSelector } from "react-redux";

const Songs = ({ songs, onSelected }) => {
  const [isHovered, setIsHovered] = useState(
    new Array(songs.length).fill(false)
  );

  const selected = useSelector((state) => state.song.selectedSongUrl);
  console.log(selected);
  const navigate = useNavigate();
  const [showList, setShowList] = useState(false);
  const showHandleUpdate = () => {
    // navigate("/edit");
    setShowList(true);
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
    <div>
      <Song>
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
                  {showList && (
                    <div>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  )}
                  {/*hovered song */}
                  {isHovered[index] ? (
                    <div className="w-[74.8%] absolute  h-20 border-b flex items-center px-6 opacity-90 bg-[#4d4e4c]">
                      <div className="flex w-full justify-between">
                        <button onClick={() => onSelected(song.file)}>
                          <CiPlay1 className="text-xl" />
                        </button>
                        <button
                          onClick={() => {
                            showHandleUpdate(selected._id);
                          }}
                        >
                          <HiOutlineDotsHorizontal className="text-xl" />
                        </button>
                      </div>
                    </div>
                  ) : null}
                  <span className="flex items-center">{index + 1}. </span>
                  <EachSong>
                    <div className="flex gap-2 items-center">
                      <img
                        src={song.Artwork ? song.Artwork : "/cov.webp"}
                        className="w-10 rounded-md h-10"
                      />
                      <h1>{song.Title}</h1>
                    </div>
                    <div className="flex items-center">
                      <h1>{song.Artist}</h1>
                    </div>
                    <div className="flex items-center">
                      <h1>{song.Genres}</h1>
                    </div>
                    <div className="flex items-center">
                      <h1>{song.Album}</h1>
                    </div>
                    <div className="flex items-center">
                      <h1>{song.Duration}</h1>
                    </div>
                  </EachSong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Song>
    </div>
  );
};

export default Songs;
