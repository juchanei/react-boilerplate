import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './module/reducer'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
	document.querySelector('#root'),
)