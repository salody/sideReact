import configureStore from './configureStore'
import mySaga from '../sagas'

const store = configureStore() // first create a store

store.runSaga(mySaga) // run your saga here

export default store
