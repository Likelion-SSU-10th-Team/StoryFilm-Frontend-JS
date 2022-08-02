import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
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
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}>
            <Route path="/write" element={<Write />} />
          </Route>
          <Route path="/films" element={<Films />}>
            <Route path="/film" element={<Film />} />
          </Route>
          <Route path="/albums" element={<Albums />}>
            <Route path="/album" element={<Album />} />
          </Route>
          <Route path="/read" element={<Read />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
