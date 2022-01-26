import { createSelector } from "reselect";

const openAlert = (state) => state.alert;

export const selectOpenAlert = createSelector(
    [openAlert],
    (alert) => alert.open
);