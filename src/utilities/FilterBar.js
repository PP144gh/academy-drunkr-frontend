import React from 'react';
import { AppBar, Toolbar, Button, styled } from '@mui/material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  overflow: 'hidden', // Hide overflow
}));

const StyledToolbar = styled(Toolbar)({
  overflowX: 'auto',
  width: '100%',
  display: 'flex', // Use flex to center children
  justifyContent: 'center', // Center children horizontally
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  minWidth: 'unset',
  margin: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

function FilterBar({ onLetterClick }) {
  const alphabet1 = 'abcdefghijklm'.split(''); // First half of the alphabet
  const alphabet2 = 'nopqrstuvwxyz'.split(''); // Second half of the alphabet

  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          {alphabet1.map((letter) => (
            <StyledButton
              key={letter}
              onClick={() => onLetterClick(letter)}
            >
              {letter}
            </StyledButton>
          ))}
        </StyledToolbar>
      </StyledAppBar>
      <StyledAppBar position="static">
        <StyledToolbar>
          {alphabet2.map((letter) => (
            <StyledButton
              key={letter}
              onClick={() => onLetterClick(letter)}
            >
              {letter}
            </StyledButton>
          ))}
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
}

export default FilterBar;
