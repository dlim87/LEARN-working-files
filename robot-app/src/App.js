import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Badrobot from './badrobot.js'
import good from './good.jpeg'
import bad from './bad.jpeg'
import kanye from './kanye.jpeg'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      words: 'Test',
      blah: 'Blah'
    }
  }

  changeValue (e){
    console.log(e.target.value)
    this.setState({words: e.target.value})
    // console.log(word.length)
    // let currentBla = 'b'
    // let tempBla = []
    // for (let i=0; i < word.length; i++){
    //     tempBla.push(tempBla)
    //     if (currentBla ==='b'){
    //       currentBla = 'l'
    //     }
    //     if (currentBla === 'l'){
    //       currentBla = 'a'
    //     } else {
    //       currentBla = 'b'
    //     }
    // }
    // this.setState({blah:tempBla})
  }



  render() {
    return (
      <div className="bot">
      <h1 id= 'title'> Say something to the robot</h1>
      <div className = "input">
      <input value= {this.state.words} onChange={this.changeValue.bind(this)}/>
      </div>
      <div className = 'mastercontainer'>
      <span id = 'goodrobot' className="card">
        <span className= 'container' id = "imgcontainer">
        <h2>Good Robot</h2>
        <img src={good} className='goodpic'></img>
        </span>
        <p className="response">I hear you saying {this.state.words}. Is that correct? </p>
      </span>
      <Badrobot words={this.state.words}/>
      <span id = 'kanyebot' className="card">
      <span className = 'container'id='imgcontainer3'>
        <h2>Kanye Bot</h2>
        <img src={kanye} className="kanyepic"></img>
        </span>
        <p className= "response">I&lsquo;m gonna let you finish but Beyonce is {this.state.words}.</p>
        </span>
        </div>
        </div>

    );
  }
}

export default App;
