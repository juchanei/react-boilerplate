import { logo as types } from '../actionTypes'

const initialState = {
    speed: 1,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SPEED_INCREMENT: return {
            ...state,
            speed: state.speed + 1,
        }
        case types.SPEED_DECREMENT: return {
            ...state,
            speed: 2 < state.speed ? state.speed - 1 : 1,
        }
        default: return state
    }
}