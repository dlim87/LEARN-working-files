import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // let colors = ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"]
  constructor() {
    super()
    this.state = {
      color: "Green"
    }

  }
  changeColor() {
    let colors = ["Green", "Blue", "Yellow", "Red", "Purple", "White", "Gray", "Orange", "Lightblue"]
    let index = colors.indexOf(this.state.color)
    console.log(index)
    index += 1;
    if (index === colors.length) {
      index = 0;
    }



    let newColor = colors[index]
    console.log(newColor)
    this.setState({
      color: newColor
    })
  }
  render() {
    return (
      <div className= 'container'>
      <div className = "colorbox"
        onClick = {  this.changeColor.bind(this)}
        style = {{backgroundColor: this.state.color}}>
      <p className = 'textbox' > {this.state.color} </p>
      </div>
      </div>
    );
  }
}

export default App;
