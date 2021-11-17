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
    featureName: 'States in Class Comp along with intro to Events'
  }

  // class comp should render JSX
  render(){
    console.log('Inside Render');
    // Render should return JSX
    return(
      <div>
        Feature is: { this.state.featureName }
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="https://via.placeholder.com/200x200" width="200" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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