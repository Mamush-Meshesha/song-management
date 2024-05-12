import songs from "../data/songs.json";
import { motion } from "framer-motion";
const Albums = () => {
  return (
    <div className="w-[79%] ml-[20%] bg-secondary mx-3 rounded-lg  h-[97vh] my-4">
      <div className="flex justify-center pt-20 pb-10">
        <h1 className="text-3xl">Albums</h1>
      </div>
      <div className="grid grid-cols-4 gap-3 mx-[10%]">
        {songs.map((song, index) => (
          <motion.button
            key={index}
            whileTap={{ scale: 0.9 }}
            className="h-[200px] rounded-md bg-primary text-white shadow-md"
          >
            <h1 className="text-2xl capitalize" key={index}>
              {song.album}
            </h1>
            <p className="text-sm text-[#4f4848] py-2">{song.artist}</p>
            <p className="text-sm text-[#4f4848]">{song.album}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Albums;
