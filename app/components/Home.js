import React, { Component } from 'react';
import {Engine} from 'matter-js';

export default class Home extends Component {
  render(){
    const engine = Engine.create();
    console.log(engine);
    return(
      <div><h2>Home Component</h2></div>
    );
  }
}