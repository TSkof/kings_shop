import AlertActionTypes from "./alert.types";

export const toggleAlert = () => ({
    type: AlertActionTypes.TOGGLE_ALERT
});
export const agreeAlert = () => ({
    type: AlertActionTypes.AGREE_ALERT
});
export const disagreAlert = () => ({
    type: AlertActionTypes.DISAGRE_ALERT
});


 