import React, {Component} from 'react'
import {styles} from "./styles"
import {withStyles} from '@material-ui/core/styles';
import {compose} from 'redux'
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import './styles.css'

class TopAppBar extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <AppBar
                    position="absolute"
                    classes={{
                        root: 'topBarBackgrond'
                    }}
                >
                    <Toolbar>
                        <Typography
                            variant="title"
                            color="inherit"
                            className={classes.flex}
                            classes={{
                                root: classes.TypographyTabBar
                            }}
                        >
                            MIA - Mamografia Inteligência Artificial
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


TopAppBar = compose(
    withStyles(styles, {withTheme: true}),
)(TopAppBar);

export {TopAppBar}