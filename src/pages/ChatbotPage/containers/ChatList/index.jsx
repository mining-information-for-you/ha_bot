import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from "./styles";
import {compose} from 'redux'
import {connect} from 'react-redux'
import _ from 'lodash'
import {USER_TYPES} from "../../../../constants";
import {ChatListItem} from "../../components";
import moment from 'moment'

const TIMER_LIMIT = moment.duration(30, 's').asSeconds();

class ChatList extends Component {
    state = {
        timerValue: TIMER_LIMIT,
        timerIntervalInstance: null
    };

    constructor(props) {
        super(props);
        this._runTimer = this._runTimer.bind(this);
        this._renderMessagesList = this._renderMessagesList.bind(this);
    }

    _renderMessagesList() {
        return _.map(this.props.messagesList, message => {
            let itemOptions = null;
            if (message.messageFrom === USER_TYPES.BOT) {
                itemOptions = {
                    direction: 'left',
                    speech: true,
                    typeAnimation: true
                }
            } else {
                itemOptions = {
                    direction: 'right',
                };
            }
            return (
                <ChatListItem
                    key={`list_${message.id}`}
                    message={message}
                    onCharacterTyped={() => this._scrollToBottom()}
                    {...itemOptions}
                />
            )
        })
    }

    _scrollToBottom() {
        const scrollHeight = this.messageList.scrollHeight;
        const height = this.messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    componentDidUpdate(prevProps) {
        this._scrollToBottom();

        if (_.map(prevProps.messagesList).length !== _.map(this.props.messagesList).length) {
            this._runTimer();
        }
    }

    componentWillUnmount() {
        if (this.state.timerIntervalInstance) {
            clearInterval(this.state.timerIntervalInstance)
        }
    }

    _runTimer() {
        if (this.state.timerIntervalInstance) {
            clearInterval(this.state.timerIntervalInstance)
        }

        const newInterval = setInterval(() => {
            if (this.state.timerValue > 0) {
                return this.setState({timerValue: moment.duration(this.state.timerValue, 's').subtract(1, 's').asSeconds()});
            }
            return this.props.history.push('/')
        }, 1000);

        this.setState({
            timerValue: TIMER_LIMIT,
            timerIntervalInstance: newInterval
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <div
                ref={(div) => {
                    this.messageList = div;
                }}
                className={classes.chatListContainer}>
                <div className={classes.chatListInner}>
                    {this._renderMessagesList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    messagesList: state.chatbot.messagesList
});

ChatList = compose(
    withStyles(styles, {withTheme: true}),
    connect(mapStateToProps)
)(ChatList);

export {ChatList}