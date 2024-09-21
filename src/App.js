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
import { Profile } from './components/auth/Profile';
import { PostMessage } from './components/auth/PostMessage';
import { MessageList } from './components/auth/MessageList';
import { FriendRequests } from './components/auth/FriendRequests';
import { UserList } from './components/auth/UserList';
import AdminDashboard from './components/admin/AdminDashboard';
import ManageUsers from './components/admin/ManageUsers';
import PostAdvertisement from './components/admin/PostAdvertisement';

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
          <Route path="/posts" element={<MessageList />} >
            {" "}
          </Route>
          <Route path="/post-message" element={
            <ProtectedRoute>
              <PostMessage />
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
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } >
            {" "}
          </Route>
          <Route path="/freinds" element={
            <ProtectedRoute>
              <FriendRequests />
            </ProtectedRoute>
          } >
            {" "}
          </Route>
          <Route path="/users" element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/post-ad" element={<PostAdvertisement />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
