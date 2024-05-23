import { useState } from "react";
import { removeSongRequest } from "../slice/songSlice";
import { UpdateStyle } from "../styled/Component/Update";
import {useDispatch, } from "react-redux"
import Editsong from "./EditSong";
const Update = ({ song, onSelected }) => {
  
  const [showEdit, setShowEdit] = useState(false)
  const dispatch = useDispatch()
  const handleDeleteSong = (id) => {
    dispatch(removeSongRequest(id))
    console.log(id)
  }
console.log("onselected on update",onSelected)
  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }
  return (
    <div className="">
      <UpdateStyle>

          <button onClick={handleShowEdit}>Edit</button>
          <button onClick={() => handleDeleteSong(song._id)}>Delete</button>
          <button>Favourate</button>

      </UpdateStyle>
      {showEdit && (<Editsong song={song} onSelected={onSelected} />)}
    </div>
  );
};

export default Update;
