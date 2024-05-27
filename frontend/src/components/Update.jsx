import { useState } from "react";
import { removeSongRequest } from "../slice/songSlice";
import { UpdateStyle } from "../styled/Component/Update";
import {useDispatch, useSelector, } from "react-redux"
import { useNavigate } from "react-router-dom";
const Update = ({ onSelected }) => {
  
  const [showEdit, setShowEdit] = useState(false)
  const dispatch = useDispatch()
  const handleDeleteSong = (id) => {
    dispatch(removeSongRequest(id))
    console.log(id)
  }
  const song = useSelector(state => state.song.selectedSongUrl)
  console.log("onselected on update", onSelected)
  const navigate = useNavigate()
  const handleShowEdit = () => {
   navigate("/edit")
  }
  return (
    <div className="relative">
      <div className="flex flex-col gap-4 absolute right-0 top-0">

          <button onClick={handleShowEdit}>Edit</button>
          <button onClick={() => handleDeleteSong(song._id)}>Delete</button>
          <button>Favourate</button>

      </div>
    </div>
  );
};

export default Update;
