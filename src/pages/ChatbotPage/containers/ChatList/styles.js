export const styles = theme => ({
    chatListContainer: {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: '149px',
        overflow: 'auto',
        top: '56px',
        '@media only screen and (max-width: 768px) and (min-width: 481px)': {
            bottom: '109px',
        },
        '@media (min-width: 600px)': {
            top: '64px',
        },
        '@media only screen and (max-width: 480px)': {
            bottom: '70px',
        },
    },
    chatListInner: {
        padding: '20px 4% 0 4% ',
        boxSizing: 'border-box',
        '@media only screen and (min-width: 481px)': {
            width: '83.333%',
            margin: 'auto'
        },
        '@media only screen and (max-width: 480px)': {
            width: '100%',
            padding: '20px 0 ',
        }
    },

});