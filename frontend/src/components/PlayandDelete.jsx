import { CiPlay1 } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Inner, PlayAndDelete } from "../styled/Component/PlayAndDelete";
const PlayandDelete = () => {
  return (
    <div>
      <PlayAndDelete>
        <Inner>
          <CiPlay1 className="text-xl" />
          <HiOutlineDotsHorizontal className="text-xl" />
        </Inner>
      </PlayAndDelete>
    </div>
  );
};

export default PlayandDelete;
