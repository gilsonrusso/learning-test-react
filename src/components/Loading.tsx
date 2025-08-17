import { styled } from '@mui/material';
import Box, { type BoxProps } from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const MuiBoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
}));

const Loading = () => {
  return (
    <MuiBoxStyled>
      <CircularProgress size={50} color="primary" />
    </MuiBoxStyled>
  );
};

export default Loading;
