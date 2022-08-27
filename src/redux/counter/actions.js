import { DECREMENT, INCREMENT, RESET } from "./actionTypes"

export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = (value) => {
    return {
        type: DECREMENT
    }
}
export const reset = () => {
    return {
        type: RESET,
    }
}