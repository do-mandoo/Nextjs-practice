import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff8e88',
    },
  },
  components: {
    MuiImageListItemBar: {
      styleOverrides: {
        root: {
          position: 'unset',
          flex: 1,
        },
        title: {
          whiteSpace: 'pre-wrap',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
          maxWidth: 'unset',
          minWidth: 'unset',
        },
      },
      defaultProps: {
        root: {
          padding: 0,
        },
      },
    },
    MuiImageList: {
      styleOverrides: {
        root: {
          overflow: 'unset',
        },
      },
    },
  },
});
