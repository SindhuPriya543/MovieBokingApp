import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { LatestMovies } from "./components/LatestMovies";
import { NearByEvents } from "./components/NearByEvents";
import { UpcomingMovies } from "./components/UpcomingMovies";
import { RecommendedMovies } from "./components/RecommendedMovies";
import { MovieDetails } from "./components/MovieDetails";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/movies" element={<LatestMovies />}>
            {" "}
          </Route>
          <Route path="/events" element={<NearByEvents />}>
            {" "}
          </Route>
          <Route path="/newmovies" element={<UpcomingMovies />}>
            {" "}
          </Route>
          <Route path="/recmovies" element={<RecommendedMovies />}>
            {" "}
          </Route>
          <Route path="/moviedetails/:moviedata" element={<MovieDetails />}>
            {" "}
          </Route>
          <Route path="/moviedetails" element={<MovieDetails />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
