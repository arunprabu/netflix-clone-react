import React, { Component } from 'react'

class TrendingShows extends Component {

  constructor(props) {
    super(props); // call super to access this keyword
    // keep state data here - when you have constructor you need to refer state as this.state 
    console.log(this.props);

    this.state = {
      showList: [
        {
          id: 34242,
          name: 'Money Heist',
          desc: 'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
          isInFav: false
        },
        {
          id: 23423,
          name: 'Squid Game',
          desc: 'The series revolves around a contest where 456 players, all of whom are in deep financial debt, risk their lives to play a series of deadly children\'s games',
          isInFav: false
        },
        {
          id: 24534,
          name: 'Black Mirror',
          desc: 'This sci-fi anthology series explores a twisted, high-tech near-future where humanity\'s greatest innovations and darkest instincts collide.',
          isInFav: false
        },
        {
          id: 34535,
          name: 'Breaking Bad',
          desc: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s...',
          isInFav: false
        }
      ]
    }

  }

  // event handler method -- without arrow fn
  handleAddToFav(index) {
    console.log(this);
    console.log(index);
    // LEt's mutate the state 
    // working with state immutably
    let dupShowList = [...this.state.showList ];
    dupShowList[index].isInFav = !dupShowList[index].isInFav;

    this.setState({
      showList: dupShowList
    });
  }

  render() {

    let shows = null;
    // lists -- Let's loop thru with array map -- introduced in ES2015
    shows = this.state.showList.map((show, index) => {
      console.log(show);
      return(
        <div className="col-sm-4" key={show.id}> { /* have unique key in key prop */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{show.name}</h5>
              <p className="card-text">{show.desc}</p>

              { show.isInFav? 
                <button className="btn btn-danger" 
                onClick={this.handleAddToFav.bind(this, index)}>
                 Added to Favorite 
                </button>
              : 
                <button className="btn btn-primary" 
                onClick={this.handleAddToFav.bind(this, index)}>
                Add to Favorite 
                </button>
              }
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="row">
        <h4>The shows trending worldwide {this.props.time} </h4>
        { /* Conditional Rendering */}

        {this.state.showList && this.state.showList.length > 0 ?
          shows
          :
          <div className="alert alert-warning">
            Unable to Fetch Trending Shows. Try again later!
          </div>
        }

      </div>

    )
  }
}

export default TrendingShows;