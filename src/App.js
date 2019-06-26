import React, { Component } from 'react';
import './App.css';
import Artists from './Artists';
import ErrorBoundary from './ErrorBoundary'
import MeasureNewRelic from './MeasureNewRelic'
class App extends Component {
 render() {
  return (
  <MeasureNewRelic name="App"> 
    <div className="App">
      <h4>Artists Performing at Tonights Grammy</h4>
      <ErrorBoundary>
        <Artists artistName='Davido'></Artists>
        <Artists artistName='Mayorkun'></Artists>
        <Artists artistName='Dremo'></Artists>
        <Artists artistName='Sinzu'></Artists>
        {/*<Artists artistName='peruzzi'></Artists> */}
      </ErrorBoundary>
    </div>
  </MeasureNewRelic>
  );
 }
}
export default App;