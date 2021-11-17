// imports 
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

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
    </main>

    <Footer></Footer>

  </div>
 );
}

//exports
export default App;
