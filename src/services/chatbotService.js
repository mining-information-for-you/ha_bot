
import {ACCESS_TOKEN} from "../constants";
import {ApiAiClient} from "../api-ai-javascript/es6/ApiAiClient"



export const botClient = new ApiAiClient({
    accessToken: ACCESS_TOKEN
});

export const sendMessageToBot = (text) =>
    botClient.textRequest(text);