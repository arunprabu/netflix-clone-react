import React, { Component } from 'react'

class LifeCycleDemo extends Component {

  // Lifecycle Hooks are available to Class Comp 
  constructor(props){
    super(props);
    console.log('===========1. Inside Constructor ============');
    this.state = {
      featureName: 'LifeCycle Hooks'
    }
  }

  // life cycle hook 
  componentDidMount(){
    console.log('=========3. Inside componentDidMount=============');
    // called after render method
    // called when the comp comes into view componentDidMount would be called
    // ideal place for you to send ajax calls 

    // upon successful ajax call -- change the state here
    // mocking the ajax call with 2 sec timeout
    setTimeout( () => {
      // assume after 2 sec i get resp from the backend 
      // you need to update the state, so that the new resp can be seen in JSX
      this.setState( {
        featureName: 'LifeCycle Hooks Demo'
      });
    }, 2000);
  }

  shouldComponentUpdate(){
    // when state is updated this method would be called
    // it has to return true or false;
    // compare the prev state and new state.. if changes are there
    // return true; else return false 

    // if true... render would be called
    // else... render would not be called
    console.log('============4. Inside shouldComponentUpdate =========== ')
    return true;
  }

  componentDidUpdate(){
    // called immediately after the update in comp JSX
    // not called after the initial rendering
    console.log('=========== 6. Inside componentDidUpdate=============');
  }

  componentWillUnmount(){
    // called after this comp going out view
    // ideal place for clear intervals, timeouts, clear data, 
    console.log("=======7. Inside componentWillUnmount");
  }

  render() {
    // Don't ever change the state using setState() here
    // if you do so, it will re-render infinitely.

    console.log('===========2 & 5. Inside Render=============');

    return (
      <div>
        <p>Feature Name: {this.state.featureName}</p>
      </div>
    )
  }
}

export default LifeCycleDemo;