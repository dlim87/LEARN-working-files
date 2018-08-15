import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Colorbox from './colorbox.js'

class App extends Component {
  // let colors = ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"]
  //constructor to create objects for the current color as well as the color array
  constructor() {
    super()
    this.state = {
      color: "Green",
      colorArray: ["Green", "Blue", "Yellow", "Red", "Purple", "White", "Gray", "Orange", "Lightblue"]
    }

  }
  //function to change the color in the object when called
  updateColor(colors) {
    this.setState({color:colors})
  }

  //create div for the container
  render() {
    return (
      <div className= 'container'>

        <Colorbox
        //passing methods/values from constructor into the Colorbox Object
        updateColor = {this.updateColor.bind(this)}
        colorArray = {this.state.colorArray}
        color = {this.state.color}/>
      </div>
    );
  }
}

export default App;
