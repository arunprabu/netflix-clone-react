// Class comp 
import React, { Component } from 'react';

class Watchlist extends Component {
  // class comp should render JSX
  render(){
    console.log('Inside Render');
    return(
      <div>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="https://via.placeholder.com/200x200" width="250" className="card-img-top" alt="..." />
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