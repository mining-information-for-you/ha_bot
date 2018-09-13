import React, {Component} from 'react'
import {styles} from "./styles"
import {withStyles} from '@material-ui/core/styles';
import {compose} from 'redux'
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';

class TopAppBar extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <AppBar
                    position="absolute"
                    classes={{
                        root: classes.appBar
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
                            EMME
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