import React from 'react';
import ReactDOM from 'react-dom';
import Test from 'components/Test';
import SearchHeader from 'components/container/SearchHeader.jsx';
import Results from 'components/container/Header.jsx';

const dest = document.getElementById('content');

ReactDOM.render(
  <div>
    <Test value={2} default="messages" one="message" /><br/>
    <Test value={1} default="messages" one="message" />
    <Header />
  </div>,
  dest
);

window.React = React; // enable debugger
