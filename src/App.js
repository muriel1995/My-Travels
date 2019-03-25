import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel
          destination="earth"
          country="loin"
          distance="sun"
          photo="https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_960_720.jpg"
        />
        <Travel
          destination="And that..."
          country="dream"
          distance="moon"
          photo="https://www.visa-algerie.com/wp-content/uploads/2018/09/voyage.jpg"
        />
        </div>
    );
  }
}

export default App;
