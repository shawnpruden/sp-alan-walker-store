import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
  },
});

export const loader = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '50vh',
};

export const miniLoader = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
