import React from 'react';
import { hot } from 'react-hot-loader';

class Title extends React.Component {
  render() {
    return (
      <div> Welcome to HMR</div>
    );
  }
}

export default hot(module)(Title);