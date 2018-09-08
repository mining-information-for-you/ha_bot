import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from "./styles";
import {Button, CircularProgress} from '@material-ui/core'
import classNames from 'classnames';
import {compose} from 'redux'
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

class LoadingFabButton extends Component {

    state = {
        loading: false,
        success: false,
    };

    constructor(props) {
        super(props);
        this._handleLoading = this._handleLoading.bind(this);
    }

    _handleLoading() {
        const {onPress} = this.props;
        this.setState({
            loading: true,
            success: false,
        });

        onPress()
            .then(() => {
                this.setState({
                    loading: false,
                    success: true,
                }, () => {
                    setTimeout(() => {
                        this.setState({success: false})
                    }, 1500)
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    success: false,
                })
            })
    }

    render() {
        const {loading, success} = this.state;
        const {classes, mainIcon, onPress, ...custom} = this.props;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success,
        });

        return (
            <div className={classes.wrapper}>
                <Button
                    {...custom}
                    variant="fab"
                    className={buttonClassname}
                    onClick={this._handleLoading}
                >
                    {success ? <CheckIcon/> : mainIcon}
                </Button>
                {loading && <CircularProgress size={68} className={classes.fabProgress}/>}
            </div>
        )
    }
}

LoadingFabButton = compose(
    withStyles(styles, {withTheme: true}),
)(LoadingFabButton);

export {LoadingFabButton}