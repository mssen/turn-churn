import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const rootElement = document.getElementById('root');
const render = (Component) =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  );

render(App);
if (module.hot) module.hot.accept('./App.jsx', () => render(App));