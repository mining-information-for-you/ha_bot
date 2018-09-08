import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient'
import {ACCESS_TOKEN} from "../constants";

export const botClient = new ApiAiClient({
    accessToken: ACCESS_TOKEN
});

export const sendMessageToBot = (text) =>
    botClient.textRequest(text);