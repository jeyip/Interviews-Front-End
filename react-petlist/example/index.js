import React from 'react';
import ReactDOM from 'react-dom';
import Test from 'components/Test';
import App from 'components/container/App.jsx';

const dest = document.getElementById('content');

ReactDOM.render(
  <App />,
  dest
);

window.React = React; // enable debugger
