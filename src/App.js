import logo from './logo.svg';
import React from 'react';
import './App.scss';
import { getSongs } from './apiCalls';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      src: ''
    }
  }

  componentDidMount = () => {
    getSongs()
      .then(data => this.setState({src: data[2021].song1.image_url}))
  }  

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.src && <img src={this.state.src} />}
        </header>
      </div>
    );
  }
}

export default App;
