import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers'

const configureStore = () => {
  // Setup the saga middleware to watch between the Reducers and the Actions
  const sagaMiddleware = createSagaMiddleware()

  // use Redux DevTools
  /*eslint-disable */
  const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  /*eslint-enable */

  const store = createStore(
    reducer,
    composeSetup(applyMiddleware(sagaMiddleware)) // allows redux devtools to watch sagas
  )
  store.runSaga = (...args) => sagaMiddleware.run(...args)
  return store
}


export default configureStore
