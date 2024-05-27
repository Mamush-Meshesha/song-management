import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import createSagaMiddleware from "redux-saga";
// import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Genres from "./pages/Genres.jsx";
import Albums from "./pages/Album.jsx";
import store from "./store/index.js";
import AlbumDetail from "./pages/AlbumDetail.jsx";
import Artists from "./pages/Artists.jsx";
import ArtistDetail from "./pages/ArtistDetail.jsx";
import GenresDetail from "./pages/GenresDetail.jsx";
import Editsong from "./pages/EditSong.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/genres/:genresName" element={<GenresDetail />} />
        <Route path="/album" element={<Albums />} />
        <Route path="/album/:albumName" element={<AlbumDetail />} />
        <Route path="/artist" element={<Artists />} />
        <Route path="/edit" element={<Editsong />} />

        <Route path="/artist/:artistName" element={<ArtistDetail />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
