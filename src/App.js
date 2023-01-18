import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import User from "./components/User";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import Color from "./components/Color";
import Posts from "./components/Posts";
import NoPage from "./pages/NoPage";

function App() {
  const sayhello = (name) => {
    return `hello World ${name}`;
  };
  return (
    <div>
      {/* <User name="Peter" />
      <Contact name="sudheer" />
      <Color color="blue" />
      <Cars brand="Nissan Pintera"/>
      <Cars name="Toyota, Nissan"/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home sayhello={sayhello} />} />
          <Route path="/users" element={<User />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/color" element={<Color />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
