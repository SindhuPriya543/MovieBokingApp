import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { LatestMovies } from './components/LatestMovies';
import { NearByEvents } from './components/NearByEvents';
import { UpcomingMovies } from './components/UpcomingMovies';
import {RecommendedMovies} from './components/RecommendedMovies'
import { MoviesImageSlider } from './components/MoviesImageSlider';

function App() {
  return (

    <div>
    <BrowserRouter>
      <Routes>

      <Route path ='/' element = {<Home/>}>  </Route> 
        <Route path ='/latestmovies' element = {<LatestMovies/>}>  </Route>
        <Route path ='/nearbyevents' element = {<NearByEvents/>}>  </Route>
        <Route path ='/upcomingmovies' element = {<UpcomingMovies/>}>  </Route>
        <Route path ='/moviesimageslider' element = {<MoviesImageSlider/>}>  </Route>
        <Route path ='/recmovies' element = {<RecommendedMovies/>}>  </Route>
       
      </Routes>
    
    </BrowserRouter>

    <Header/>
    
    {/* <Footer/> */}
    
   
   
 
    </div>
  );
}

export default App;
