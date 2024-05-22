import { useState } from "react";
import { removeSongRequest } from "../slice/songSlice";
import { UpdateStyle } from "../styled/Component/Update";
import {useDispatch, } from "react-redux"
import Editsong from "./EditSong";
const Update = ({ song }) => {
  
  const [showEdit, setShowEdit] = useState(false)
  const dispatch = useDispatch()
  const handleDeleteSong = (id) => {
    dispatch(removeSongRequest(id))
    console.log(id)
  }

  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }
  return (
    <div>
      <UpdateStyle>

          <button onClick={handleShowEdit}>Edit</button>
          <button onClick={() => handleDeleteSong(song)}>Delete</button>
          <button>Favourate</button>

      </UpdateStyle>
      {showEdit && (<Editsong />)}
    </div>
  );
};

export default Update;
