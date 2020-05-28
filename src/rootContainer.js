import React from 'react';
import Title from './title';
import { hot } from 'react-hot-loader';
import './styles/index.scss';

class RootContainer extends React.Component {
  render() {
    return (
      <div className="dudeTe"> <Title /> </div>
    );
  }

}
export default hot(module)(RootContainer);