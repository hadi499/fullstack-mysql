import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost";
import Navbar from "./components/Navbar";
import EditPost from "./components/EditPost";
import DetailPost from "./components/DetailPost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<DetailPost />} />
          <Route path="add" element={<AddPost />} />
          <Route path="edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
