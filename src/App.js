// imports 
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import LatestMovie from './components/LatestMovie';
import Watchlist from './containers/Watchlist';

// comp defn 
// have the layout in this comp
function App() {
  // should return JSX 
  // JSX will look like HTML 
 return(
  <div>
    <Header></Header>

    <main className="mt-5 container">
      <div className="bg-light p-5 rounded">
        <h1>Welcome to Netflix App</h1>
        <p className="lead">Pay and watch movies, cancel any time!</p>
        <a className="btn btn-lg btn-danger" href="/" role="button">Signup Now &raquo;</a>
      </div>

      <br />
      <h2>Latest Movies | Props Demo</h2>
      { /*  Passing props from parent comp to child comp */ }
      <LatestMovie name="Dune" genre="Action"
        releaseInfo="Releasing this week!">
        Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.
      </LatestMovie> 
      
      <LatestMovie name="Shang-Chi and the Legend of the Ten Rings" genre="Adventure"
        releaseInfo="Released last month!"> 
        Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.
      </LatestMovie>

      <h2>Manage Watchlist | Class Comp, States and Events </h2>
      <Watchlist />

    </main>

    <Footer></Footer>

  </div>
 );
}

//exports
export default App;
