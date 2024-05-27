import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSongByArtistRequest, setSelectedSongUrl, setShowPlayer, setShowUpdate } from "../slice/songSlice";
import { EachSong, Head, Inner, Song } from "../styled/Component/Song";
import { Container, Players } from "../styled/page/HomeStyled";
import Player from "../components/Player";
import { CiPlay1 } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ArtistDetail = () => {
  const { artistName } = useParams();
    const artist = useSelector((state) => state.song.artist.songs);
  const error = useSelector((state) => state.song.error);
  const isLoading = useSelector((state) => state.song.isLoading);
 const showPlayer = useSelector((state) => state.song.showPlayer);
 const selectedSongUrl = useSelector((state) => state.song.selectedSongUrl);
  const songs = useSelector((state) => state.song.songs);
  
    const showUpdate = useSelector((state) => state.song.showUpdate);

    const [isHovered, setIsHovered] = useState(new Array(artist).fill(false));


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongByArtistRequest(artistName));
  }, [dispatch, artistName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSongSelect = (file) => {
    console.log("Song selected:", file);
    dispatch(setSelectedSongUrl(file));
    dispatch(setShowPlayer(true));
  };

  const showHandleUpdate = () => {
    dispatch(setShowUpdate(!showUpdate));
  };

  const handleMouseEnter = (index) => {
    const newIsHovered = new Array(artist.length).fill(false);
    newIsHovered[index] = true;
    setIsHovered(newIsHovered);
  };

  const handleMouseLeave = (index) => {
    setIsHovered(isHovered.map((hover, i) => (i === index ? false : hover)));
  };
  return (
    <Container>
      <div className="fixed z-40 top-0 right-0 w-[80%] ">
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
      <Song className="mt-[250px]">
        <Head>
          <h1># Title</h1>
          <h1>artist</h1>
          <h1>genres</h1>
          <h1>album</h1>
          <h1>duration</h1>
        </Head>
        <hr className="text-10] text-[#39b298] bg-secondary px-12" />
        <div className="text-white relative">
          {artist && artist.length > 0 ? (
            artist.map((song, index) => (
              <div key={index}>
                <div className="">
                  <span
                    className="border-b border-[#39b298]  flex gap-3 w-full h-20 "
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {isHovered[index] ? (
                      <div className="w-[100%] absolute h-20 border-b flex items-center px-6 opacity-70 bg-[#4d4e4c]">
                        <Inner>
                          <button onClick={() => handleSongSelect(song.file)}>
                            <CiPlay1 className="text-xl" />
                          </button>
                          <button onClick={showHandleUpdate}>
                            <HiOutlineDotsHorizontal className="text-xl" />
                          </button>
                        </Inner>
                      </div>
                    ) : null}
                    <span className="flex gap-2 items-center">
                      {index + 1}.
                    </span>
                    <EachSong className="">
                      <div className="flex gap-2 items-center">
                        <h1 className="text-white">{song.Title}</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <h1>{song.Genres}</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <h1>{song.Artist}</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <h1>{song.Album}</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <h1>{song.Duration}</h1>
                      </div>
                    </EachSong>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div>No songs found for this artist.</div>
          )}
        </div>
      </Song>
    </Container>
  );
};

export default ArtistDetail;
