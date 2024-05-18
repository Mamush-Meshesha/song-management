// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getSongFetch } from "../slice/songSlice";
const All = () => {
  // const songs = useSelector(state => state.song.song)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getSongFetch())
  // },[dispatch])
  // return (
  //   <div className="w-[79%] ml-[20%] bg-secondary mx-3 rounded-lg  h-[97vh] my-4">
  //     <div className=" py-10 px-5">
  //       <h1 className="text-3xl ">All songs</h1>
  //     </div>
  //     <motion.div
  //       initial={{
  //         y: -300,
  //       }}
  //             animate={{ y: 30 }}
  //             transition={{
  //                 times: 3000
  //             }}
  //       className="flex flex-col gap-3 mx-20"
  //     >
  //       {songs.map((song, index) => (
  //         <div
  //           key={index}
  //           className="bg-primary flex gap-2 py-4 text-white rounded-md px-5"
  //         >
  //           {index + 1} <h1>{song.Title}</h1>
  //         </div>
  //       ))}
  //     </motion.div>
  // //   </div>
  // );
};

export default All;
