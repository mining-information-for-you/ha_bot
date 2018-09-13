import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from "./styles";
import {compose} from 'redux'
import {connect} from 'react-redux'
import _ from 'lodash'
import {USER_TYPES} from "../../../../constants";
import {ChatListItem} from "../../components";
import {sendHiToBot} from "../../../../actions";

class ChatList extends Component {

    constructor(props) {
        super(props);
        this._renderMessagesList = this._renderMessagesList.bind(this)
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.sendHiToBot()
        }, 500)
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
                    onCharacterTyped={() => this.scrollToBottom()}
                    {...itemOptions}
                />
            )
        })
    }

    scrollToBottom() {
        const scrollHeight = this.messageList.scrollHeight;
        const height = this.messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    componentDidUpdate() {
        this.scrollToBottom();
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
    connect(mapStateToProps, {sendHiToBot})
)(ChatList);

export {ChatList}