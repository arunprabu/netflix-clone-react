import React from 'react';

const LatestMovie = (props) => { // receive the props

  /* What are props ? 
    Props are used for receiving data from parent comp
    Props are Obj 
    Props are read-only
    Props can have children.
  */

  console.log(props);

  return (
    <div className="card mb-3">
      <div className="card-header">
        {props.releaseInfo}
        <span className="badge 
        rounded-pill bg-warning 
        text-dark float-end">{props.genre}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.children}</p>
        <button className="btn btn-primary">Watch Trailer</button>
      </div>
    </div>
  )
}

export default LatestMovie;
