import { D_DECREMENT, D_INCREMENT, D_RESET } from "./actionTypes";

const initialState = {
    value: 0
}

const dynamicCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case D_INCREMENT:
            // console.log(state.value);
            return {
                ...state,
                value: state.value + action.payload
            }
        case D_DECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
        case D_RESET:
            return {
                ...state,
                value: 0
            }
        default:
            return state
    }
}
export default dynamicCounterReducer