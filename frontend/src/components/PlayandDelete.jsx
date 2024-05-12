import { CiPlay1 } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const PlayandDelete = () => {
  return (
    <div>
      <div className="h-20 w-[100%] border-b flex items-center absolute bg-secondary bg-opacity-70 px-6">
        <div className="flex justify-between w-full ">
          <CiPlay1 className="text-xl" />
          <HiOutlineDotsHorizontal className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default PlayandDelete;
