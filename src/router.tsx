import { BrowserRouter, Route, Routes } from "react-router-dom";
import Albums from "./routers/Albums";
import Films from "./routers/Films";
import Home from "./routers/Home";
import Album from "./screens/Album";
import Film from "./screens/Film";
import Read from "./screens/Read";
import Write from "./screens/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/films" element={<Films />} />
        <Route path="/read" element={<Read />} />
        <Route path="films/film/:id" element={<Film />} />
        <Route path="albums" element={<Albums />} />
        <Route path="albums/album/:id" element={<Album />} />
        <Route path="*" element={<div>nothing to show</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
