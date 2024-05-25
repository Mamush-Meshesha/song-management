
import Player from "../components/Player";
import Songs from "../components/Songs";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchSong } from "../slice/songSlice"
import { Container, Players } from "../styled/page/HomeStyled";

function Home() {
  const songs = useSelector(state => state.song.song)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSong())
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
      <Container>
        <div >
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
        <div className="pt-20 px-10">
          <Songs songs={songs} onSelected={handleSongSelect}   />
        </div>
      </Container>
    </div>
  );
}

export default Home;
