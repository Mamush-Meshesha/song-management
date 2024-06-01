import { useEffect, useRef, useState } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoPauseCircleOutline } from "react-icons/io5";
import { FaBackward, FaForward, FaForwardStep } from "react-icons/fa6";
import { FaStepBackward } from "react-icons/fa";
import { PlayerStyle } from "../styled/Component/Player";

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
  }, [songUrl]);

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
    audioPlayer.current.currentTime += 30;
    progressBar.current.value = audioPlayer.current.currentTime;
    changeRange();
  };
  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % song.length;
      return newIndex;
    });
    setIsPlaying(true);
  };

  const previousSong = () => {
    setCurrentSongIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + song.length) % song.length;
      return newIndex;
    });
    setIsPlaying(true);
  };

  const handleVolumeChange = (e) => {
    const newVolumePercentage = e.target.value;
    const newVolume = newVolumePercentage / 100; // Convert percentage to decimal
    setVolume(newVolumePercentage); // Update state with percentage
    audioPlayer.current.volume = newVolume; // Set audio volume
  };

  useEffect(() => {
    audioPlayer.current.src = songUrl;
  }, [songUrl]); // Update the audio source when the currentSongIndex changes

  return (
    <PlayerStyle>
      <div>
        <audio ref={audioPlayer} src={songUrl} preload="metadata"></audio>
      </div>

      <button className="md:text-2xl text-xs " onClick={previousSong}>
        <FaBackward className="text-[#12be24] text-xl" />
      </button>
      <button className="md:text-2xl text-xs " onClick={backThirthy}>
        <FaStepBackward className="text-[#12be24]" />
      </button>
      <button onClick={togglePlay} >
        {isPlaying ? (
          <IoPauseCircleOutline className="text-[#12be24]" />
        ) : (
          <MdOutlinePlayCircle className="text-[#12be24]" />
        )}
      </button>
      <button className="md:text-2xl text-xs " onClick={forwardThirthy}>
        <FaForwardStep className="text-[#12be24]" />
      </button>
      <button className="md:text-2xl text-xs " onClick={nextSong}>
        <FaForward className="text-[#12be24] text-xl" />
      </button>

      {/* current */}
      <div>{calculateTime(currentTime)}</div>
      <div className="md:w-[70%] w-[120px] ">
        <input
          ref={progressBar}
          type="range"
          className="w-full"
          defaultValue="0"
          onChange={changeRange}
        />
      </div>
      <div>{calculateTime(duration)}</div>
      <div className="flex items-center w-[10%] md:w-[70%] ">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={volume}
          className="w-[60px]"
          onChange={handleVolumeChange}
        />
        <span>{volume}%</span>
      </div>
    </PlayerStyle>
  );
};

export default Player;
