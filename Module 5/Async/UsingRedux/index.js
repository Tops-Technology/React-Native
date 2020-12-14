import { View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// Import the reducer and create a store
import { reducer } from './postsRedux'

// Add the thunk middleware to our store
const store = createStore(reducer, applyMiddleware(thunk))

// Import the App container component
import App from './App'

// Pass the store into the Provider
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
