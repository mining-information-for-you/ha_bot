import React, {Component} from 'react'

class VoicePlayer extends Component {
    state = {
        started: false,
        playing: false
    };

    constructor(props) {
        super(props);

        if ('speechSynthesis' in window) {
            this.speech = this.createSpeech()
        } else {
            console.warn('The current browser does not support the speechSynthesis API.')
        }

        this.toggleAudio = this.toggleAudio.bind(this)

    }

    createSpeech = () => {
        const defaults = {
            text: '',
            volume: 1,
            rate: 1,
            pitch: 1,
            lang: 'pt-BR'
        };

        let speech = new SpeechSynthesisUtterance();

        Object.assign(speech, defaults, this.props);

        return speech
    };

    speak = () => {
        window.speechSynthesis.speak(this.speech);
        this.setState({started: true, playing: true})
    };

    cancel = () => {
        window.speechSynthesis.cancel();
        this.setState({started: false, playing: false})
    };

    pause = () => {
        window.speechSynthesis.pause();
        this.setState({playing: false})
    };

    resume = () => {
        window.speechSynthesis.resume();
        this.setState({playing: true})
    };

    componentWillReceiveProps({pause}) {
        if (pause && this.state.playing && this.state.started) {
            return this.pause()
        }

        if (!pause && !this.state.playing && this.state.started) {
            return this.resume()
        }
    }

    shouldComponentUpdate() {
        return false
    }

    toggleAudio() {
        if (this.state.playing) {
            return this.pause()
        }
        if (this.state.started) {
            return this.resume()
        }
        return this.speak()
    }

    componentDidMount() {
        const events = [
            {name: 'start', action: this.props.onStart},
            {name: 'error', action: this.props.onError},
            {name: 'pause', action: this.props.onPause},
            {name: 'resume', action: this.props.onResume}
        ];

        events.forEach(e => {
            this.speech.addEventListener(e.name, e.action)
        });

        this.speech.addEventListener('end', () => {
            this.setState({started: false, playing: false});
            this.props.onEnd ? this.props.onEnd() : null
        });

        this.props.playVoiceTextFunc(this.toggleAudio);

        if (this.props.play) {
            this.speak()
        }
    }

    componentWillUnmount() {
        this.cancel()
    }

    render() {
        return null
    }
}

export {VoicePlayer}