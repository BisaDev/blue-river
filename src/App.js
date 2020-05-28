import React from 'react';
import Title from './title';
import { hot } from 'react-hot-loader';
import './App/styles/index.scss';

class App extends React.Component {
  render() {
    return (
      <div className="dudeTe"> <Title /> </div>
    );
  }

}
export default hot(module)(App);