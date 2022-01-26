import AlertActionTypes from "./alert.types";

const INITIAL_STATE = {
    open: false
}
const alertReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AlertActionTypes.TOGGLE_ALERT:
            return {
                ...state,
                open: !state.open
            }
        case AlertActionTypes.AGREE_ALERT:
            return {
                ...state,

            }
        default:
            return state;
        }
}            

export default alertReducer;
