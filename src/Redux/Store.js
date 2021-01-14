import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import reducer from './reducers';


export default createStore(
  reducer
  // composeWithDevTools(
  //   applyMiddleware(
  //     thunkMiddleware.withExtraArgument({ axios }),
  //     loggingMiddleware
  //   )
  // )
);