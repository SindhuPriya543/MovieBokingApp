import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { LatestMovies } from "./components/LatestMovies";
import { NearByEvents } from "./components/NearByEvents";
import { UpcomingMovies } from "./components/UpcomingMovies";
import { RecommendedMovies } from "./components/RecommendedMovies";
import { MovieDetails } from "./components/MovieDetails";
import { TicketBooking } from "./components/TicketBooking";
import { FinalBooking } from "./components/FinalBooking";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { ForgotComponent } from "./components/ForgotComponent";

function App() {
  //const location = useLocation();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />}>
            {" "}
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/latestmovies" element={<LatestMovies />}></Route>
          <Route path="/nearbyevents" element={<NearByEvents />}>
            {" "}
          </Route>
          <Route path="/upcomingmovies" element={<UpcomingMovies />}>
            {" "}
          </Route>
          <Route path="/recmovies" element={<RecommendedMovies />}></Route>
          <Route path="/moviedetails" element={<MovieDetails />}>
            {" "}
          </Route>
          <Route path="/ticketbooking" element={<TicketBooking />}></Route>
          <Route path="/finalbooking" element={<FinalBooking />}></Route>
          <Route path="/forgot" element={<ForgotComponent />}></Route>
        </Routes>
        <Header />
      </BrowserRouter>

      {/* {location.pathname !== "/" && <Header />} */}
    </div>
  );
}

export default App;
