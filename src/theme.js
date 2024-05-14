import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
//https://mui.com/material-ui/customization/default-theme/
const theme = createTheme({
  palette: {
    mode : 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text : {
    secondary : red[500],
    }
  },
});

export default theme;