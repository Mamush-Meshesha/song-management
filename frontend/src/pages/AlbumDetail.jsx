import { useDispatch, useSelector } from "react-redux";
import { AlbumStyled } from "../styled/page/AlbumStyled";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchSongByAlbumRequest } from "../slice/songSlice";
import { EachSong, Head, Song } from "../styled/Component/Song";

const AlbumDetail = () => {
  const { albumName } = useParams();
    const album = useSelector((state) => state.song.album.songs);
    const error = useSelector((state) => state.song.error)
    const isLoading = useSelector(state => state.song.isLoading) 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongByAlbumRequest(albumName));
  }, [dispatch, albumName]);
    
     if (isLoading) {
       return <div>Loading...</div>;
     }

     if (error) {
       return <div>Error: {error}</div>;
     }
  return (
    <div className="">
      <Song>
        <Head className="ml-[21%]">
          <h1># Title</h1>
          <h1>artist</h1>
          <h1>genres</h1>
          <h1>album</h1>
          <h1>duration</h1>
        </Head>
        <AlbumStyled>
          {album && album.length > 0 ? (
            album.map((song, index) => (
              <div key={index} className="flex text-white px-2 py-5">
                <span>{index + 1}.</span>
                <EachSong className="">
                  <div>
                    <h1 className="text-white">{song.Title}</h1>
                  </div>
                  <div>
                    <h1>{song.Genres}</h1>
                  </div>
                  <div>
                    <h1>{song.Artist}</h1>
                  </div>
                  <div>
                    <h1>{song.Album}</h1>
                  </div>
                  <div>
                    <h1>{song.Duration}</h1>
                  </div>
                </EachSong>
              </div>
            ))
          ) : (
            <div>No songs found for this album.</div>
          )}
        </AlbumStyled>
      </Song>
    </div>
  );
};

export default AlbumDetail;
