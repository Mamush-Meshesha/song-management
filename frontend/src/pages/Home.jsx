
import Player from "../components/Player";
import Songs from "../components/Songs";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchSong, setSelectedSongUrl } from "../slice/songSlice"
import { Container, Players } from "../styled/page/HomeStyled";

function Home() {
  const songs = useSelector(state => state.song.song)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSong())
  }, [dispatch])
 const [showPlayer, setShowPlayer] = useState(false)
  // const [selectedSongUrl, setSelectedSongUrl] = useState(null)
  const selectedSongUrl = useSelector((state) => state.song.selectedSongUrl);
  const handleSongSelect = (file) => {
    console.log("Song selected:", file);
    dispatch(setSelectedSongUrl(file));
    setShowPlayer(true)
  } 
  return (
    <div>
      <Container>
        <div className="fixed  z-30 top-0  right-0  md:w-[80%] ">
          <Players>
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
          </Players>
        </div>
        <div className="px-10 mt-[250px]">
          <Songs songs={songs} onSelected={handleSongSelect} />
        </div>
      </Container>
    </div>
  );
}

export default Home;
