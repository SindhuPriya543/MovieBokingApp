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
import { TicketBooking } from "./components/TicketBooking";
import { FinalBooking } from "./components/FinalBooking";
import { SignIn } from "./components/auth/Signin";
import { Register } from "./components/auth/Register";
import ProtectedRoute from './components/auth//ProtectedRoute';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/home" element={<Home />}>
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
          <Route path="/ticketbooking/:title" element={
            <ProtectedRoute>
              <TicketBooking />
            </ProtectedRoute>
          } >
            {" "}
          </Route>
          <Route path="/finalbooking" element={
            <ProtectedRoute>
              <FinalBooking />
            </ProtectedRoute>
          } >
            {" "}
          </Route>
          <Route path="/posts" element={
            <ProtectedRoute>
              <FinalBooking />
            </ProtectedRoute>
          } >
            {" "}
          </Route>
          <Route path="/login" element={<SignIn />}>
            {" "}
          </Route>
          <Route path="/register" element={<Register />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
