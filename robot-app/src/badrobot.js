import React, { Component } from 'react'
import bad from './bad.jpeg'

class Badrobot extends Component{
  blabla (word){
    let currentBla = 'B'
    let tempBla = []
    for (let i=0; i<word.length; i++){
        if (word[i] === " "){
          tempBla.push(' ')
        } else {
        tempBla.push(currentBla)

        if (currentBla ==='B'){
          currentBla = 'L'
        }
        else if (currentBla === 'L'){
          currentBla = 'A'
        } else {
          currentBla = 'B'
        }
    }
  }
    tempBla=tempBla.join("")
    return tempBla
  }

  render(){
    return(
      <span className="card">
      <span className = 'container'id='imgcontainer1'>
      <h2>Bad Robot</h2>
      <img src={bad} className="badpic"></img>
      </span>
      <p className="response">I hear you saying {this.blabla(this.props.words)} Is that correct? </p>
      </span>
    )
  }
}

export default Badrobot;
