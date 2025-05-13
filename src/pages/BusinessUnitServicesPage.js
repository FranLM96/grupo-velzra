import React from 'react';
import { useParams } from 'react-router-dom';
import businessUnitsData from '../data/businessUnitsData';

import { Box, Typography, Container } from '@mui/material';

const BusinessUnitServicesPage = () => {
  const { businessUnitSlug } = useParams();

  // Find the business unit data based on the slug
  const selectedBusinessUnit = businessUnitsData.find(
    (unit) => unit.slug === businessUnitSlug
  );

  if (!selectedBusinessUnit) {
    // Handle case where business unit is not found
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" align="center" color="error">
          Business unit not found.
        </Typography>
      </Container>
    );
  }

  // Use SingleBusinessUnitView to display the selected business unit
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Services for {selectedBusinessUnit.title}
        </Typography>
      
        
      </Container>
    </Box>
  );
};

export default BusinessUnitServicesPage;