import {
    LOGO_SPIN_SPEED__INCREMENT,
    LOGO_SPIN_SPEED__DECREMENT,
} from '../values'

export const logoSpinSpeedIncrement = () => ({ type: LOGO_SPIN_SPEED__INCREMENT })
export const logoSpinSpeedDecrement = () => ({ type: LOGO_SPIN_SPEED__DECREMENT })