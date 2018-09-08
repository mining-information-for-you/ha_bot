export const styles = theme => ({
    messageRightContainer: {
        margin: '30px 0',
    },
    messageLeftContainer: {
        margin: '30px 0',
        cursor: 'pointer'
    },
    messageText: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        fontWeight: '400',
        transition: '.2s cubic-bezier(.55,0,.1,1)',
        whiteSpace: 'pre-wrap',
        padding: '1px 48px 0',
        '@media only screen and (max-width: 480px)': {
            fontSize: '1.25rem',
            padding: '7px, 0 0 40px',
        }
    },
    rightMessageText: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        textAlign: 'right',
        fontWeight: '400',
        transition: '.2s cubic-bezier(.55,0,.1,1)',
        whiteSpace: 'pre-wrap',
        padding: '1px 48px 0',
        '@media only screen and (max-width: 480px)': {
            fontSize: '1.25rem',
            padding: '7px, 0 0 40px',
        }
    },
    messageIcon: {
        float: 'left',
        fontSize: '35px',
        padding: '10px 0',
        color: theme.palette.secondary.main
    },
    rightMessageIcon: {
        float: 'right',
        fontSize: '35px',
        padding: '10px 0',
        color: theme.palette.primary.main
    },
});