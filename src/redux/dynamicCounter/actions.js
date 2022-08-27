import { D_DECREMENT, D_INCREMENT, D_RESET } from "./actionTypes"

export const increment = (value) => {
    return {
        type: D_INCREMENT,
        payload: value
    }
}
export const decrement = (value) => {
    return {
        type: D_DECREMENT,
        payload: value
    }
}
export const reset = () => {
    return {
        type: D_RESET,
    }
}