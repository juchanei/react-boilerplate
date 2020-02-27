import {
    LOGO_SPIN_SPEED__INCREMENT,
    LOGO_SPIN_SPEED__DECREMENT,
} from '../values'

export default (state = {}, action) => {
    switch (action.type) {
        case LOGO_SPIN_SPEED__INCREMENT:
            return { ...state, speed: state.speed + 1 }
        case LOGO_SPIN_SPEED__DECREMENT:
            return { ...state, speed: 2 < state.speed ? state.speed - 1 : 1 }
        default:
            return { ...state, speed: 1 }
    }
}