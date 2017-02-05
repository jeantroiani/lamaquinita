import { INCREASE_VALUE, DECREASE_VALUE } from '../actions/counterActions.js';

const defaultState = { value: 0 }

export default (state = defaultState, action) => {
    switch(action.type) {
        case INCREASE_VALUE:
            return { ...state, ...{ value: state.value + action.value } };
        case DECREASE_VALUE:
            return { ...state, ...{ value: state.value - action.value } };
        default:
            return state;
    }
}
