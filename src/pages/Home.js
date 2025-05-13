import React from 'react';
import { Box, useTheme } from '@mui/material'; // Import useTheme
import PresentationSection from '../components/HomeComponents/PresentationSection';
import CallToActionSection from '../components/HomeComponents/CallToActionSection';
import BusinessUnitCardsSection from '../components/HomeComponents/BusinessUnitCardsSection'; // Import the new component

const Home = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}> {/* Use theme default background color */}
      <PresentationSection />
      <BusinessUnitCardsSection /> {/* Add the new component here */}
      <CallToActionSection />
    </Box>
  );
};

export default Home;