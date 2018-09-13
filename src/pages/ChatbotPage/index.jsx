import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from "./styles";
import {compose} from 'redux'
import {TopAppBar} from "./components";
import {ChatList, TextInput} from "./containers";

class ChatbotPage extends Component {
    render(){
        const {classes} = this.props;
        return (
           <div className={classes.root}>
               <TopAppBar/>
               <main className={classes.content}>
                   <div className={classes.toolbar}/>
                   <ChatList/>
                   <TextInput/>
               </main>
           </div>
        )
    }
}

ChatbotPage = compose(
    withStyles(styles, {withTheme: true}),
)(ChatbotPage);

export {ChatbotPage}