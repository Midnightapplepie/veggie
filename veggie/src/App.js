import React, { Component } from 'react';
// import './App.css';
import SearchBar from './search_bar';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/index';

const store=createStore(allReducers);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <SearchBar />
      </Provider>
    );
  }
}

export default App;


