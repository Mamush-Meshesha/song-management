
import Player from "../components/Player";
import Songs from "../components/Songs";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getSongFetch } from "../slice/songSlice"

function Home() {
  const songs = useSelector(state => state.song.song)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongFetch())
  }, [dispatch])
 const [showPlayer, setShowPlayer] = useState(false)
  const [selectedSongUrl, setSelectedSongUrl] = useState(null)
  const handleSongSelect = (file) => {
    console.log("Song selected:", file);
    setSelectedSongUrl(file)
    setShowPlayer(true)
  }
  return (
    <div>
      <div className="w-[79%] relative ml-[20%] min-h-[97%] m-7 mb-0 rounded-xl bg-secondary">
        <div className="w-full">
          <div className="bg-gradient-to-b rounded-t-lg from-[#0e7182] via-[#537075] to-[#2f4245] h-[120px] sm:h-[250px]">
            <dotlottie-player
              src="https://lottie.host/ca99de6d-26dd-411e-8def-8c940864c7f3/UaxD9Neqpo.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
            <div>
              {showPlayer && <Player songUrl={selectedSongUrl} song={songs} />}
            </div>
          </div>
        </div>
        <div className="pt-20 px-10">
          <Songs songs={songs} onSelected={handleSongSelect} />
        </div>
      </div>
    </div>
  );
}

export default Home;
