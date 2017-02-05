export const INCREASE_VALUE = 'INCREASE_VALUE';
export const DECREASE_VALUE = 'DECREASE_VALUE';

export function increaseValue (value) {
    return {
        type: INCREASE_VALUE, value
    }
}

export function decreaseValue (value) {
    return {
        type: DECREASE_VALUE, value
    }
}
