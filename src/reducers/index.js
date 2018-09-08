import {combineReducers} from 'redux'
import toastAlertReducer from './toastAlertReducer'
import chatbotReducer from './chatbotReducer'
import systemSettingsReducer from './systemSettingsReducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    form: formReducer,
    toastAlert: toastAlertReducer,
    systemSettings: systemSettingsReducer,
    chatbot: chatbotReducer,
});