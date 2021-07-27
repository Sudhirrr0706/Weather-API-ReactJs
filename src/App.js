import React, { Component } from 'react'
import Ui from './components/Ui';
import './App.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="p-lg-4 blurBg-image ">
          <Ui />
        </div>
      </React.Fragment>
      
    )
  }
}

export default App
