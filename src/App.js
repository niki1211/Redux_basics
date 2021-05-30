import './App.css';
import Dashboard from './components/Dashboard';
import {Provider} from 'react-redux';
import { Component } from 'react';
import store from './app/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Dashboard />
        </div>
      </Provider>
    );}
}

export default App;
