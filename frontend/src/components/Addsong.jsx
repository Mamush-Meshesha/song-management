import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadSong, uploadSongToCloud } from "../slice/songSlice";
import { HiOutlineX } from "react-icons/hi";

const Addsong = ({close}) => {
  const [audios, setAudios] = useState(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genres, setGenres] = useState("");
  const [duration, setDuration] = useState("");
  const [album, setAlbum] = useState("");
  const dispatch = useDispatch();


  const { uploadProgress, isLoading} = useSelector(state => state.song)
  const handleFileChange = (e) => {
    setAudios(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!audios) {
      console.error("No file selected");
      return;
    }

  

    const formData = new FormData();
    formData.append("file", audios);

    console.log("Dispatching uploadSong with:", formData);
    dispatch(uploadSong(formData));
  };

  const files = useSelector((state) => state.song?.uploadedFile || "");
    const file = files[0]?.url
    console.log(file);
 
  const handleSongUpload = () => {
    // if (!url) {
    //   console.error("No file URL available");
    //   return;
    // }

    const songDetails = {
      title,
      artist,
      genres,
      album,
      file: file,
      duration,
    };

    dispatch(uploadSongToCloud(songDetails));
  };


  return (
    <div className="overflow-hidden">
      <div className="w-[100vw] h-[100vh] absolute bg-[#000] bg-opacity-80 top-0 left-0 flex justify-center items-center  ">
        <div className="w-[600px] h-[600px] p-10 bg-[#21362e] relative rounded-lg ">
          <div className="flex justify-center py-10    text-white text-3xl">
            <h1>Would you like to add a song?</h1>
          </div>
          <button onClick={close}>
            <HiOutlineX className="absolute top-0 right-0 m-5 text-2xl text-white" />
          </button>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
                className="h-11 pl-3 outline-none rounded-md"
              />
            </div>
            <div>
              <input
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                type="text"
                placeholder="album"
                className="h-11 pl-3 outline-none rounded-md"
              />
            </div>
            <div>
              <input
                value={genres}
                onChange={(e) => setGenres(e.target.value)}
                type="text"
                placeholder="genres"
                className="h-11 pl-3 outline-none rounded-md"
              />
            </div>
            <div>
              <input
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                type="text"
                placeholder="Artist"
                className="h-11 pl-3 outline-none rounded-md"
              />
            </div>
          </div>
          <div className="py-4 w-full justify-center flex">
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              type="text"
              placeholder="duration"
              className="h-11 pl-3 outline-none rounded-md"
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
              <span className="mt-2 text-base leading-normal">
                Select audio file (.mp3/ogg ...)
              </span>
              <input
                type="file"
                className="hidden"
                accept="audio/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div className="flex gap-10 w-full">
            <div className=" ">
              <button
                className="h-12  bg-[#1eab7a] text-white rounded-md"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                Upload File
              </button>
            </div>
            <div className="w-full">
              <button
                className="h-12  bg-[#1eab7a] text-white rounded-md"
                onClick={handleSongUpload}
              >
                upload song
              </button>
            </div>
          </div>
        </div>
        {isLoading && (
          <div className="absolute top-0 right-0">
            <progress value={uploadProgress} max="100" />
            <span>{uploadProgress}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addsong;
