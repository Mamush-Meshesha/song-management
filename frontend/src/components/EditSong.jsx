
import { useState } from "react";
import { Add, Pad } from "../styled/Component/Add";
import { useDispatch } from "react-redux";
import { updateSongRequest } from "../slice/songSlice";

const Editsong = ({song,onSelected}) => {

  const [title, setTitle] = useState(song?.Title || "")
  const [album, setAlbum] = useState(song?.Album || "")
  const [genres, setGenres] = useState(song?.Genres || "")
  const [artist, setArtist] = useState(song?.Artist || "")
  const [duration, setDuration] = useState(song?.Duration || "")
  const [file, setFile] = useState(song.file)
  
 console.table(song)

  const dispatch = useDispatch()
console.log("onselected on edit", onSelected);
  const handleUpdateSong = () => {
    const updateSong = {
      id: song._id,
      Title: title,
      Album: album,
      Genres: genres,
      Artist: artist,
      Duration: duration,
      file: file
    }
console.log(file)
    dispatch(updateSongRequest(updateSong))
  }
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="overflow-hidden">
      <div className="w-[100%] h-[100%] absolute z-50 bg-[#000] bg-opacity-80 top-0 left-0 flex justify-center items-center  ">
        <div className="w-[600px] h-[600px] p-10 bg-[#21362e] ">
          <div className="flex justify-center  py-10 text-black  text-3xl">
            <h1>Would you like to update a song?</h1>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
                className="h-11 pl-3 outline-none  text-black  rounded-md"
              />
            </div>
            <div>
              <input
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                type="text"
                placeholder="album"
                className="h-11 pl-3 outline-none text-black  rounded-md"
              />
            </div>
            <div>
              <input
                value={genres}
                onChange={(e) => setGenres(e.target.value)}
                type="text"
                placeholder="genres"
                className="h-11 pl-3 outline-none text-black  rounded-md"
              />
            </div>
            <div>
              <input
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                type="text"
                placeholder="Artist"
                className="h-11 pl-3 outline-none text-black  rounded-md"
              />
            </div>
          </div>
          <div className="py-4 w-full justify-center flex">
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              type="text"
              placeholder="duration"
              className="h-11 pl-3 outline-none text-black  rounded-md"
            />
          </div>
          <div className="py-4">
            <label className="w-full flex flex-col items-center px-6 py-3 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4a2 2 0 012 2v12a.5.5 0 01-1 0V6a.5.5 0 011-1h4a.5.5 0 011 1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a.5.5 0 011-1h4zm1 14a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mt-2 text-base text-black  leading-normal">
                Select audio file (.mp3/ogg ...)
              </span>
              <input
                onChange={handleFileChange}
                type="file"
                className="hidden"
                accept="audio/*"
              />
            </label>
          </div>
          <div className="flex gap-10 w-full">
            <div className=" ">
              <button className="h-12  bg-[#1eab7a] text-white rounded-md">
                Upload File
              </button>
            </div>
            <div className="w-full">
              <button
                onClick={handleUpdateSong}
                className="h-12  bg-[#1eab7a] text-white rounded-md"
              >
                upload song
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editsong;
