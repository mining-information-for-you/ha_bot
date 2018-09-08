import green from '@material-ui/core/colors/green';

export const styles = theme => ({
    wrapper: {
        width: '56px',
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },

    button: {
        transition: '.2s cubic-bezier(.55,0,.1,1)',
        boxShadow: 'none',
        "&:hover": {
            transform: 'scale(1.05)',
            boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
        },
    },
});