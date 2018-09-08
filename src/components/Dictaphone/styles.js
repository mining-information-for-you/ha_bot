import green from '@material-ui/core/colors/green';

export const styles = theme => ({
    micIcon: {
        fontSize: '26px',
    },
    micButton: {
        boxShadow: 'none',
    },
    micIsListening: {
        backgroundColor: green[500],
        boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
        '&:hover': {
            backgroundColor: green[700],
        }
    }
});