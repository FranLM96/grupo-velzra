import React from 'react';
import { Box, Typography, useTheme } from '@mui/material'; // Import useTheme


const Subsidiaries = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box sx={{ py: 5, textAlign: 'center', bgcolor: theme.palette.background.default }}> {/* Use theme default background color */}
      <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.text.primary }}> {/* Use theme primary text color */}
        Subsidiaries
      </Typography>
      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
        This is the Subsidiaries component.
      </Typography>
    </Box>
  );
};

export default Subsidiaries;
