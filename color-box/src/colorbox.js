import React, {Component} from 'react'


//need to pass in array for colors and state for current color
class Colorbox extends Component {
  changeColor() {
    //verify it's reading the click
    console.log('click')
    //gathers objects from App.js and inserts them into working variables
    let colors = this.props.colorArray
    let index = colors.indexOf(this.props.color)
    console.log(index)
    //index finds out what current color is inside colorArrray
    index += 1;
    //^^moves to next color
    if (index === colors.length) {
      index = 0;
    }
    let nuevaColor = colors[index]
    //IF statement to reset it when it hits the length of the array
    console.log(nuevaColor)
    //sending the newColor to be updated
    this.props.updateColor(nuevaColor);
    }
  render() {
    return (
      //creating class for Colorbox
      //changing style for background color to match textbox
      /*textbox is just text identifying the current background color*/
      //calling the changeColor function onClick to change background color

      <div className = 'colorbox' style = {{backgroundColor:this.props.color}} onClick = {this.changeColor.bind(this)}>
      <p className = 'textbox'>
      {this.props.color} </p>
      </div>
    )
  }
}









export default Colorbox
