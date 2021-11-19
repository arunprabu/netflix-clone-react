import React, { Component } from 'react';
import axios from 'axios';

class SubscribersList extends Component {

  state = {
    subscribers: []
  }

  // class comp with REST API call
  componentDidMount(){
    // ideal place for us to send a AJAX req to the backend. 
    // What's the REST API URL? 'https://jsonplaceholder.typicode.com/users' 
    // What's the HTTP Method?'GET'
    // What's the REST API Client Tool? Axios --- npm i axios 
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then( (res) => {
        console.log(res);
        this.setState( {
          subscribers: res.data
        })
      })
      .catch( (err) => {
        console.log(err);
      })
      .finally( () => {
        console.log('It is over!');
      });
  }


  render() {
    let subs = null; 
    subs = this.state.subscribers.map( (sub)=>{
      return(
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{sub.name}</h5>
              <p className="card-text">Phone: {sub.phone}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      )
    });


    return (
      <div>
        { this.state.subscribers && this.state.subscribers.length > 0? 
          <div className="row row-cols-1 row-cols-md-3 g-4">
            
            { subs}

          </div>
          :
          <div className="alert alert-warning">
            Unable to Fetch Subscribers! Try agin later.
          </div>
        }
      </div>
    )
  }
}

export default SubscribersList;