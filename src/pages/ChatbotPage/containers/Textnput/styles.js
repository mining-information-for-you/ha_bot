
export const styles = () => ({
    buttonContainer: {
        width: '16.6667%',
        textAlign: 'right',
        maxWidth: '170px',
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        '@media only screen and (min-width: 769px)': {
            width: '16.6667%'
        },
        '@media only screen and (min-width: 0px)': {
            width: '25%'
        }
    },
    inputBar: {
        width: '100%',
        backgroundColor: '#EBECF3',
        padding: '40px 25px',
        boxSizing: 'border-box',
        '@media only screen and (max-width: 768px) and (min-width: 481px)': {
            padding: '20px 15px',
        },
        '@media only screen and (max-width: 480px)': {
            padding: '14px',
        }
    },
    inputBarFixed: {
        transition: 'bottom .3s cubic-bezier(.55,0,.1,1)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
    inputBarInner: {
        display: 'flex',
    },
    input: {
        backgroundColor: 'inherit',
        flex: 1,
        transition: '.2s cubic-bezier(.55,0,.1,1)',
        fontSize: '2rem',
        color: '#2e2d33',
        boxShadow: 'none',
        border: 'none',
        '&:focus': {
            outlineColor: 'transparent',
            outlineStyle: 'none'
        },
        '@media only screen and (max-width: 480px)': {
            fontSize: '1.5rem',
        }
    },
});