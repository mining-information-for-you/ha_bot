import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        secondary: {
            light: '#5db1b9',
            main: '#5db1b9',
            dark: '#5db1b9',
            contrastText: '#fff',
        },
        primary: {
            light: '#9587e5',
            main: '#9587e5',
            dark: '#9587e5',
            contrastText: '#fff',
        },
        third: {
            light: '#3D4A4B',
            main: '#3D4A4B',
            dark: '#3D4A4B',
            contrastText: '#fff',
        },
        background: {
            default: '#f2f2f2'
        },
        danger: {
            default: '#ff654d'
        }
    },
});
