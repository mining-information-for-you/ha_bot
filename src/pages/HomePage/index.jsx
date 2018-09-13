import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from './styles'
import {compose} from 'redux'
import {connect} from 'react-redux'

class HomePage extends Component {
    render(){
        return (
            <div></div>
        )
    }
}

HomePage = compose(
    withStyles(styles, {withTheme: true}),
    connect(null, {})
)(HomePage);

export {HomePage}