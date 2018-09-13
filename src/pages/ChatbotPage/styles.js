export const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'fixed',
        display: 'flex',
        width: '100%',
    },
    toolbar: {
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: `0 ${theme.spacing.unit * 3}px`,
    },
});