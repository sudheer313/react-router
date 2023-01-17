import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import User from "./components/User";
import Contact from "./components/Contact";
import Fetch from "./components/Fetch";

function App() {
  return (
    <div>
      <h1>home</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/users" element={<User />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fetch" element={<Fetch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
