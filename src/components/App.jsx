import React, { Component } from 'react';
import AddScreen from './AddScreen/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <AddScreen />
    )
  }
}

export default App;

