// Class comp 
import React, { Component } from 'react';

class Watchlist extends Component {

  // can keep data here 
  /* What is state? 
      * States are objects 
      * You can update state 
      * States are mutable (editable)
      * state is a keyword -- available only in class comp 
      * Do not mutate state directly 
      * State data is accessible to the entire class comp
  */

  state = {
    featureName: 'States in Class Comp along with intro to Events',
    moviesList: [
      { 
        id: 1, 
        name: 'Jurassic Park', 
        desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
        thumbnail: 'https://via.placeholder.com/200x200', 
        isInWatchlist: true 
      },
      { id: 2, 
        name: 'Cast Away', 
        desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
        thumbnail: 'https://via.placeholder.com/200x200', 
        isInWatchlist: true 
      }
    ]
  }

  handleChangeFeatureName = () => { // to get the context of 'this' keyword -- use Arrow Fn
    // Mutating state
    // DO NOT MUTATE STATE DIRECTLY. use setState()
    // when we mutate state using setState() -- render method would be called
    this.setState({
      featureName: 'Handling Event'
    });
    // setting state will keep other properties intact
    // setState will smartly merge the changes with the existing state 
  }

  // class comp should render JSX
  render(){
    console.log('Inside Render');
    // Render should return JSX
    return(
      <div>
        Feature is: { this.state.featureName }
        <div className="row">
          <button type="button" className="btn btn-dark" 
          onClick={this.handleChangeFeatureName}>Change Feature Name</button>

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.moviesList[0].thumbnail} width="200" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{this.state.moviesList[0].name}</h5>
                <p className="card-text">{this.state.moviesList[0].desc}</p>
                <button className="btn btn-sm btn-primary">Remove From Watchlist</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.moviesList[1].thumbnail} width="200" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{this.state.moviesList[1].name}</h5>
                <p className="card-text">{this.state.moviesList[1].desc}</p>
                <button className="btn btn-sm btn-primary">Remove From Watchlist</button>
              </div>
            </div>
          </div>


        </div>
        
      </div>
    )
  }
}

export default Watchlist;