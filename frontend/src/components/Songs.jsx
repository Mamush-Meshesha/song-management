import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiPlay1 } from "react-icons/ci";
import PropTypes from "prop-types";
import Update from "./Update";
const Songs = ({ songs, onSelected }) => {
  const [isHovered, setIsHovered] = useState(
    new Array(songs.length).fill(false)
  );

  const [showUpdate, setShowUpdate] = useState(false)


  const showHandleUpdate = () => {
    setShowUpdate(!showUpdate)
  }

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
  console.log(songs)

  return (
    <div>
      <div className="pb-32">
        <div className="grid grid-cols-5 text-white capitalize text-xl py-5">
          <h1># Title</h1>
          <h1>artist</h1>
          <h1>genres</h1>
          <h1>album</h1>
          <h1>duration</h1>
        </div>

        <hr className="text-10] text-[#39b298] bg-secondary" />
        <div className="text-white relative">
          {songs.map((song, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <span
                  className="border-b border-[#39b298]  flex gap-3 w-full h-20 "
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {/*hovered song */}
                  {isHovered[index] ? (
                    <div className="h-20 w-[100%] border-b flex items-center absolute bg-[#192331] bg-opacity-70 px-6">
                      <div className="flex justify-between w-full ">
                        <button onClick={() => onSelected(song.file)}>
                          <CiPlay1 className="text-xl" />
                        </button>
                        <button onClick={showHandleUpdate}>
                          <HiOutlineDotsHorizontal className="text-xl" />
                        </button>
                      </div>
                      {showUpdate && <Update />}
                    </div>
                  ) : null}
                  <span className="flex items-center">{index + 1}. </span>
                  <span className="grid grid-cols-5  w-full">
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
                  </span>
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
