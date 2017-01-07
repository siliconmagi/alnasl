import React, { Component } from 'react';

const Hello = ({ name }) =>  <h1 > Hello {name} </h1> // Stateless/Pure component

export default class Comp extends Component {
    render() {
        return (
          <div>
              <Hello name={'world update live reload'} /> 
          </div>
        );
    }
}
