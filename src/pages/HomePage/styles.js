export const styles = () => ({
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    mainTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 50,
        margin: 0,
        '@media only screen and (min-width: 768px)': {
            fontSize: 60,
        },
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: '100px',
        padding: '20px 40px',
        fontSize: 20,
        fontWeight: '600',
        color: '#5c98bb',
        marginTop: '10%',
    }
});