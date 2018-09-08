import {ACTION_TYPES} from "../constants";

export const changeTitle = (title) => {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.PAGE_TITLE_CHANGED,
            payload: title
        })
    }
};
