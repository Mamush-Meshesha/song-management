import { useSelector } from "react-redux";
import { Container, Table, Tilt } from "../styled/page/GenreStyle";


const Genres = () => {
  const groupedSongs = useSelector((state) => state.song.groupedSongs);
  const isLoading = useSelector((state) => state.song.isLoading);
  const error = useSelector((state) => state.song.error); // Assuming you have an error state

  if (isLoading) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Adjust based on how you handle errors
  }
console.log(groupedSongs)
  return (
    <Container>
      <Tilt>
        <h1 className="text-3xl">Genres</h1>
      </Tilt>
      <Table>
        {/* {Object.entries(groupedSongs).map(([genre, songs]) => (
          <motion.div
            key={genre}
            whileTap={{ scale: 0.9 }}
            className="h-[200px] rounded-md bg-primary text-white shadow-md flex flex-col justify-between"
          >
            <h1 className="text-2xl capitalize">{genre}</h1>
            <ul>
              {songs.map((song) => (
                <li key={song._id}>
                  <h2 className="text-lg">{song.Title}</h2>
                  <p className="text-sm text-[#4f4848]">
                    Artist: {song.Artist}
                  </p>
                  <p className="text-sm text-[#4f4848]">Album: {song.Album}</p>
                  <img
                    src={song.Artwork}
                    alt={song.Title}
                    className="w-full h-1/2 object-cover rounded-md mt-2"
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        ))} */}
      </Table>
    </Container>
  );
};

export default Genres;
