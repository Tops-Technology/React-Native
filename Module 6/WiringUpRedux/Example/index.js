import React, { Component } from "react";
import { render } from "react-dom";
// Our simple form
import SimpleForm from "./SimpleForm";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// the formReducer() function
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <SimpleForm />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);