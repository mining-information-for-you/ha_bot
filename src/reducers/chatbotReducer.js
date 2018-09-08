import {ACTION_TYPES} from "../constants";

const initial = {
    messagesList: null,
    messagesData: null
};


export default (state = initial, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHATBOT.SEND_MESSAGE_TO_LIST:
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.payload.id]: action.payload
                }
            };
        case ACTION_TYPES.CHATBOT.FETCH_BOT_ANSWER.SUCCESS:
            return {
                ...state,
                messagesData: {
                    ...state.messagesData,
                    [action.payload.id]: action.payload
                },
            };
        default:
            return state
    }
}