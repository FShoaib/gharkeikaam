import React, { Component } from 'react';
import logo from '../logo.svg';
import Header_Admin from '../Components/Header_Admin';
import Footer from '../Components/Footer';
import Request_Completed from '../Components/Request_Completed';
import { FirebaseContext } from '../Components/Firebase'
import { withRouter } from 'react-router-dom';











class App extends Component {
 


  render() {
      console.log('here')
      console.log(this.props.location.state.details)
      let id=this.props.location.state.details
    return (
      <div className="App">
        <Header_Admin />
        <FirebaseContext.Consumer>
            {firebase => <Request_Completed firebase={firebase} requestid={id} /> }
            </FirebaseContext.Consumer>  
        <Footer />
      
     
        <Footer />
      </div>
    );
  }
}


export default App;