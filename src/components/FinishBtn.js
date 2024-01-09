import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './FinishBtn.css'


function SessionCloseButton() {
  const confirmClose = () => {
    if (window.confirm("Queres mesmo terminar a noite?")) {
      window.alert("Noite terminada!");
    }
  };

  return (
    <Box>
        <div className="session-close">
            <div>
                <Button variant="contained" color="primary" onClick={confirmClose}>
                    TERMINAR NOITE
                </Button>
            </div>
        </div>
    </Box>
  );
  
}

export default SessionCloseButton;
