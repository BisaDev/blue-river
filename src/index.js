import React from 'react';
import { render } from '@hot-loader/react-dom';
import RootContainer from './App';
import './App/styles/app.scss'

render(<RootContainer/>,document.querySelector('#root'));

