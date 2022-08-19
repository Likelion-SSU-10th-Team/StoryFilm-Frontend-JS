import { BrowserRouter, Route, Routes } from "react-router-dom";
import Albums from "./routers/Albums";
import Films from "./routers/Films";
import Home from "./routers/Home";
import Album from "./screens/Album";
import Film from "./screens/Film";
import Login from "./screens/Login";
import Read from "./screens/Read";
import Register from "./screens/Register";
import Write from "./screens/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/film/:id" element={<Film />} />
        <Route path="/read" element={<Read />} />
        <Route path="albums" element={<Albums />} />
        <Route path="albums/album/:id" element={<Album />} />
        <Route path="*" element={<div>nothing to show</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
