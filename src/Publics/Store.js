import {
    createStore,
    applyMiddleware,
} from 'redux'
import {
    createLogger
} from 'redux-logger'
import Promisemiddleware from 'redux-promise-middleware'

import reducer from './Reducers'

const logger = createLogger()
const store = createStore(reducer, applyMiddleware(logger, Promisemiddleware))

export default store