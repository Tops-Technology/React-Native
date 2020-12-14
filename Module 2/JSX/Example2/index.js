import React from 'react';
import ReactDOM from 'react-dom';

const myelement = React.createElement('h1', {}, 'I do not use JSX!');

ReactDOM.render(myelement, document.getElementById('root'));