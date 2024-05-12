import { motion } from "framer-motion";

const Addsong = () => {


  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="w-[600px] h-[500px]  rounded-lg  top-0 mt-[350px] ml-[200px] bg-[#20413a] absolute"
      >
        <div className="p-10">
          <div className="flex justify-center  py-10 text-white text-3xl">
            <h1>would like to add song?</h1>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Title"
              className=" h-12 px-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Genres"
              className="h-12 px-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Album"
              className="h-12 px-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Artist"
              className="h-12 px-3 rounded-md"
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
                multiple
               
              />
            </label>
          </div>
          <div className="flex justify-center pt-10">
            <button  className="h-12 w-[20%] bg-[#1eab7a] text-white rounded-md">
              Add Song
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Addsong;
