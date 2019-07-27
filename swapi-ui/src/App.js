import React, { useState } from 'react';
import Home from './components/Home';
import './App.css';
import {connect} from 'react-redux';
import {simpleAction} from './actions/sampleAction'

function App(prop) {

  const [name, setName] = useState(prop.name);
  return (
    <div className="App">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => prop.changeName(name)}>Submit</button>
      {prop.name}
      <Home/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.sampleReducer.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeName:(name) => dispatch(simpleAction(name))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
