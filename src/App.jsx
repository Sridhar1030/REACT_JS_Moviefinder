import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies";
import Genre from "./components/Genre/Genre";
import MovieInformation from "./components/MovieInformation/MovieInformation"; // Import the MovieInformation component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="genre" element={<Genre />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
          </Routes>
        </Router>
      </main>
  )
}
export default App;
