import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiPlay1 } from "react-icons/ci";
import PropTypes from "prop-types";
import Update from "./Update";
import { EachSong, Head, Inner, Placed, Song } from "../styled/Component/Song";

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

        <hr className=" text-[#39b298] bg-secondary relative" />
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
                    <div className="w-[74.8%] absolute h-20 border-b flex items-center px-6 opacity-70 bg-[#4d4e4c]">
                      <div className="flex w-full justify-between">
                        <button onClick={() => onSelected(song.file)}>
                          <CiPlay1 className="text-xl" />
                        </button>
                        <button onClick={showHandleUpdate}>
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
              <div>
                {showUpdate && (
                  <Update song={song} onSelected={onSelected(song.file)} />
                )}
              </div>
            </div>
          ))}
        </div>
      </Song>
    </div>
  );
};

export default Songs;
