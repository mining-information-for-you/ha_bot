import {ACTION_TYPES, USER_TYPES} from "../constants";

export const sendMessageToBot = (chatbotInstance, text) => (dispatch) =>
    new Promise((resolve, reject) => {

        dispatch({
            type: ACTION_TYPES.CHATBOT.SEND_MESSAGE_TO_LIST,
            payload: {
                id: Date.now(),
                text,
                messageFrom: USER_TYPES.HUMAN
            }
        });

        chatbotInstance.textRequest(text)
            .then(res => {
                dispatch({
                    type: ACTION_TYPES.CHATBOT.FETCH_BOT_ANSWER.SUCCESS,
                    payload: res
                });
                dispatch({
                    type: ACTION_TYPES.CHATBOT.SEND_MESSAGE_TO_LIST,
                    payload: {
                        id: Date.now(),
                        text: res.result.fulfillment.speech,
                        messageFrom: USER_TYPES.BOT
                    }
                });
                resolve()
            })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    });

export const sendHiToBot = (chatbotInstance) => (dispatch) =>
    new Promise((resolve, reject) => {
        chatbotInstance.textRequest('oi')
            .then(res => {
                dispatch({
                    type: ACTION_TYPES.CHATBOT.FETCH_BOT_ANSWER.SUCCESS,
                    payload: res
                });
                dispatch({
                    type: ACTION_TYPES.CHATBOT.SEND_MESSAGE_TO_LIST,
                    payload: {
                        id: Date.now(),
                        text: res.result.fulfillment.speech,
                        messageFrom: USER_TYPES.BOT
                    }
                });
                resolve()
            })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    });

export const cleanAllChatbotMessages = () => ({
    type: ACTION_TYPES.CHATBOT.CLEAN_ALL_MESSAGES
});