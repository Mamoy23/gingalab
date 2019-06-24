import React from 'react';
import './App.css';
import Slider from './Slider'
import Show from './Show';
import Firestore from './Firestore'
import firebase from 'firebase'

//export const ValueContext = React.createContext();

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      value: null
    }
  }

  componentDidUpdate(){
    const db = firebase.firestore();
    const docRef = db.collection("slider").doc("83ZaFxZzXjoU8sJYwUCc")

    docRef.get().then((doc) => {
      if (doc.exists) {
          this.setState({value: doc.data().value })
      } else {
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  
  }

  handleChange = (e) => {
    this.setState({value: e.target.value}, () => {
      this.store()
    })
  }

  store = () => {
    const db = firebase.firestore();
    const docRef = db.collection("slider").doc("83ZaFxZzXjoU8sJYwUCc")

    docRef.set({
      value: this.state.value
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    }); 
  }

  render(){
    return (
      <div className="App">
            {/* <ValueContext.Provider value={this.state.value}> */}
                <Slider handleChange={this.handleChange} />
            {/* </ValueContext.Provider> */}
              <Show value={this.state.value}/>
      </div>
    );
  }
}

export default App;
