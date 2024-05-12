import { useEffect, useRef, useState } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoPauseCircleOutline } from "react-icons/io5";
import { FaBackward, FaForward, FaForwardStep } from "react-icons/fa6";
import { FaStepBackward } from "react-icons/fa";

const Player = ({ songUrl, song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // duration
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(100);

  const audioPlayer = useRef();

  const progressBar = useRef();

  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    //meta data

    // progressbar
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (sec) => {
    if (isNaN(sec)) return "00:00";
    const minutes = Math.floor(sec / 60);
    const returnMinute = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const second = Math.floor(sec % 60);

    const returnedSecond = second < 10 ? `0${second}` : `${second}`;

    return `${returnMinute}:${returnedSecond}`;
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty(
      "--value",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };
  const togglePlay = () => {
    // const prevValue = isPlaying;
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    if (songUrl) {
      audioPlayer.current.src = songUrl;
    }
  }, [songUrl]); // Update the audio source when the songUrl changes

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    progressBar.current.style.setProperty(
      "--value",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const backThirthy = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirthy = () => {
    // Add 30 seconds to the audio player's current time
    audioPlayer.current.currentTime += 30;
    // Update the progress bar value based on the audio player's current time
    progressBar.current.value = audioPlayer.current.currentTime;
    changeRange();
  };
  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % song.length);
  };
  const previousSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + song.length) % song.length
    );
  };

  const handleVolumeChange = (e) => {
    const newVolumePercentage = e.target.value;
    const newVolume = newVolumePercentage / 100; // Convert percentage to decimal
    setVolume(newVolumePercentage); // Update state with percentage
    audioPlayer.current.volume = newVolume; // Set audio volume
  };

  useEffect(() => {
    audioPlayer.current.src = songUrl
  }, [songUrl]); // Update the audio source when the currentSongIndex changes

  return (
    <div className=" flex justify-center items-center rounded-full px-20 gap-2 py-5 ml-[120px]  w-[80%] bottom-0 bg-gradient-to-b from-[#314447] border-0 border-transparent  via-[#517076] to-[#343A46] text-white right-0">
      <div>
        <audio ref={audioPlayer} src={songUrl} preload="metadata"></audio>
      </div>

      <button onClick={previousSong}>
        <FaBackward className="text-[#12be24] text-xl" />
      </button>
      <button className="text-2xl" onClick={backThirthy}>
        <FaStepBackward className="text-[#12be24]" />
      </button>
      <button onClick={togglePlay} className="text-3xl">
        {isPlaying ? (
          <IoPauseCircleOutline className="text-[#12be24]" />
        ) : (
          <MdOutlinePlayCircle className="text-[#12be24]" />
        )}
      </button>
      <button className="text-2xl" onClick={forwardThirthy}>
        <FaForwardStep className="text-[#12be24]" />
      </button>
      <button onClick={nextSong}>
        <FaForward className="text-[#12be24] text-xl" />
      </button>

      {/* current */}
      <div>{calculateTime(currentTime)}</div>
      <div className="w-[70%]">
        <input
          ref={progressBar}
          type="range"
          className="w-full"
          defaultValue="0"
          onChange={changeRange}
        />
      </div>
      <div>{calculateTime(duration)}</div>
      <div className="flex items-center gap-2">
        <input
          type="range"
          min="0"
          max="100"
          step="1" // Adjust step as needed
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{volume}%</span>
      </div>
    </div>
  );
};

export default Player;
