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
import Artists from "./pages/Artists.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/album" element={<Albums />} />
        <Route path="/artist" element={<Artists />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
