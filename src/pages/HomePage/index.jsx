import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from './styles'
import {compose} from 'redux'
import {connect} from 'react-redux'
import './styles.css'
import {Button} from '@material-ui/core';
import {cleanAllChatbotMessages} from "../../actions";

class HomePage extends Component {

    componentDidMount(){
        this.props.cleanAllChatbotMessages()
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={'homeBackgroundContainer'}>
                <div className={classes.innerContainer}>
                    <h1 className={classes.mainTitle}>
                        Olá vamos começar uma conversa!
                    </h1>
                    <Button
                        onClick={() => this.props.history.push('/bot')}
                        variant="contained"
                        className={classes.button}
                    >Começar</Button>
                </div>
            </div>
        )
    }
}

HomePage = compose(
    withStyles(styles, {withTheme: true}),
    connect(null, {cleanAllChatbotMessages})
)(HomePage);

export {HomePage}