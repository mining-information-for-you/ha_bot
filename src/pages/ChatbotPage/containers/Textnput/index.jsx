import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from "./styles";
import {compose} from 'redux'
import {connect} from 'react-redux'
import classNames from 'classnames';
import {sendMessageToBot} from "../../../../actions";
import {Field, reduxForm} from 'redux-form'
import {Dictaphone, LoadingFabButton} from "../../../../components";
import {Send as SendIcon} from '@material-ui/icons';

class TextInput extends Component {

    state = {
        listening: false,
        typing: false,
        resetMicFunc: null,
        stopListeningMicFunc: null,
    };

    constructor(props) {
        super(props);
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(values) {
        const inputValue = values.inputTextMessage;
        this.props.reset();
        this.state.resetMicFunc();
        this.state.stopListeningMicFunc();
        return new Promise((resolve, reject) => {
            this.props.sendMessageToBot(inputValue)
                .then(() => resolve())
                .catch(() => reject())
        });
    }


    render() {
        const {handleSubmit, classes, submitting, pristine, change} = this.props;

        console.log(this.props);

        return (
            <div className={classNames(classes.inputBar, classes.inputBarFixed)}>
                <form onSubmit={handleSubmit(this._onSubmit)}>
                    <div className={classes.inputBarInner}>
                        <Field
                            component='input'
                            required={true}
                            placeholder="Pergunte-me algo"
                            type="text"
                            autoComplete="off"
                            name="inputTextMessage"
                            className={classes.input}
                        />
                        <div className={classes.buttonContainer}>
                            <Dictaphone
                                resetTextFunc={(funcRef) => this.setState({resetMicFunc: funcRef})}
                                stopListeningFunc={(funcRef) => this.setState({stopListeningMicFunc: funcRef})}
                                onChangeValue={(value) => change('inputTextMessage', value)}
                            />
                            <LoadingFabButton
                                mainIcon={<SendIcon/>}
                                onPress={handleSubmit(this._onSubmit)}
                                type="submit"
                                disabled={pristine || submitting}
                                color="secondary"
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

TextInput = compose(
    withStyles(styles, {withTheme: true}),
    connect(null, {sendMessageToBot}),
    reduxForm({
        form: 'BotInput',
    }),
)(TextInput);

export {TextInput}