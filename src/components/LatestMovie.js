import React from 'react';

const LatestMovie = () => {
  return (
    <div className="card">
      <div className="card-header">
        Released this week!
        <span className="badge rounded-pill bg-warning text-dark float-end">Action</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">Dune</h5>
        <p className="card-text">Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.</p>
        <a href="/" className="btn btn-primary">Watch Trailer</a>
      </div>
    </div>
  )
}

export default LatestMovie;
