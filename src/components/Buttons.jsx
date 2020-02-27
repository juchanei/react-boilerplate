import React from 'react'
import { useDispatch } from 'react-redux'
import {
    logoSpinSpeedIncrement,
    logoSpinSpeedDecrement,
} from '../module/actions'

export default () => {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(logoSpinSpeedIncrement())}>+</button>
            <button onClick={() => dispatch(logoSpinSpeedDecrement())}>-</button>
        </div>
    )
}