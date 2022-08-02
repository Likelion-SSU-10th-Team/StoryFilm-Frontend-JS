import { BrowserRouter, Route, Routes } from "react-router-dom";
import Albums from "./routers/Albums";
import Films from "./routers/Films";
import Home from "./routers/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/films" element={<Films />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
