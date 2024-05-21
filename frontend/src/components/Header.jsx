import { NavLink } from "react-router-dom";
import Addsong from "./Addsong";
import { useState } from "react";
import { motion } from "framer-motion";
import {Headers, Order, AddSongButton} from "../styled/Component/Header";
const Header = () => {
  const [showAdd, setShowAdd] = useState(false)
  
  const toggleShow = () => {
    setShowAdd(!showAdd)
  }
  return (
    <Headers>
      <div className="text-white">
        <Order>
          <motion.button whileTap={{ margin: "2px", scale: 0.9 }}>
            <NavLink to="/" className="sm:flex text-xl sm:gap-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 "
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>

              <h1 className="hidden sm:block">Home</h1>
            </NavLink>
          </motion.button>
          <motion.button whileTap={{ margin: "2px", scale: 0.9 }}>
            <NavLink to="/artist" className="sm:flex text-xl sm:gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                  clipRule="evenodd"
                />
              </svg>

              <h1 className="hidden sm:block">Artists</h1>
            </NavLink>
          </motion.button>
          <motion.button whileTap={{ margin: "2px", scale: 0.9 }}>
            <NavLink to="/album" className="sm:flex text-xl sm:gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="w-7 h-7"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={2}></circle>
                  <circle cx={18} cy={9} r={2}></circle>
                  <path d="M15.318 3.631a9 9 0 1 0 5.368 10.736M20 9V2l2 2"></path>
                </g>
              </svg>

              <h1 className="hidden sm:block">Albums</h1>
            </NavLink>
          </motion.button>
          <motion.button whileTap={{ margin: "2px", scale: 0.9 }}>
            <NavLink to="/genres" className="sm:flex text-xl sm:gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="w-7 h-7"
              >
                <path
                  fill="currentColor"
                  d="M10.072 17.692q1.12 0 1.909-.785T12.769 15V7.846h2.077q.31 0 .54-.221t.23-.548q0-.31-.23-.54t-.54-.23h-2.192q-.31 0-.54.23t-.23.54v5.938q-.388-.315-.85-.511q-.463-.196-.957-.196q-1.122 0-1.907.784t-.785 1.903t.784 1.909t1.903.788M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.708-3.51t1.924-2.859t2.856-1.925T11.997 3t3.51.708t2.859 1.924t1.925 2.856t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                ></path>
              </svg>
              <h1 to={"/about"} className="hidden sm:block">
                Genres
              </h1>
            </NavLink>
          </motion.button>
          <motion.button
            whileTap={{ margin: "2px", scale: 0.9 }}
            className="sm:flex text-xl sm:gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 "
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>

            <AddSongButton onClick={toggleShow} className="hidden sm:block">
              Add Song
            </AddSongButton>
          </motion.button>
        </Order>
      </div>
      <div>{showAdd && <Addsong />}</div>
    </Headers>
  );
};

export default Header;
