import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import reducer from './reducers';


export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      // thunkMiddleware.withExtraArgument({ axios }),
      // loggingMiddleware
    )
  )
  );