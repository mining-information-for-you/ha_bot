import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from "./styles";
import {Button} from '@material-ui/core'
import classNames from 'classnames';
import {Mic as MicIcon} from '@material-ui/icons';
import SpeechRecognition from 'react-speech-recognition'
import {compose} from 'redux'

class Dictaphone extends Component {

    constructor(props) {
        super(props);
        this._toggleListen = this._toggleListen.bind(this)
    }

    componentDidMount(){
        const {
            recognition,
            resetTextFunc,
            resetTranscript,
            stopListeningFunc,
            stopListening
        } = this.props;

        if(recognition) recognition.lang = 'en-US';

        resetTextFunc(resetTranscript);
        stopListeningFunc(stopListening)
    }

    componentWillUnmount() {
        this.props.abortListening();
    }

    componentDidUpdate(prevProps) {
        const {transcript, listening, onChangeValue} = this.props;

        if (transcript !== prevProps.transcript && listening) {
            onChangeValue(transcript)
        }
    }

    _toggleListen() {
        const {
            startListening,
            stopListening,
            resetTranscript,
            listening,
        } = this.props;

        if (listening) {
            return stopListening()
        }

        resetTranscript();
        return startListening()
    }

    render() {
        const {
            classes,
            browserSupportsSpeechRecognition,
            listening,
        } = this.props;

        if (!browserSupportsSpeechRecognition) {
            return null
        }

        return (
            <Button onClick={this._toggleListen}
                    className={classNames(listening ? classes.micIsListening : '', classes.micButton)}
                    variant="fab" color="primary">
                <MicIcon className={classes.micIcon}/>
            </Button>
        )
    }
}

Dictaphone = compose(
    withStyles(styles, {withTheme: true}),
    SpeechRecognition({
        autoStart: false
    })
)(Dictaphone);

export {Dictaphone}