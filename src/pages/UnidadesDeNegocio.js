import React from 'react';
import ServiceCarousel from '../components/ServiceCarousel';
import { Typography, Box, Container, useTheme } from '@mui/material'; // Import useTheme

const UnidadesDeNegocio = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box sx={{ py: 6, bgcolor: theme.palette.background.default, color: theme.palette.text.primary }}> {/* Use theme default background and primary text color */}
     
 <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ color: theme.palette.primary.main, mb: 2 }} /* Use theme primary color */
        >
          Unidades de negocio
        </Typography>
      <ServiceCarousel />

       <Container maxWidth="md">
       

        <Typography
          variant="body1"
          align="center"
          sx={{ color: theme.palette.text.secondary, mb: 4 }} /* Use theme secondary text color */
        >
          Contamos con las mejores marcas del mercado como <strong>Comex</strong>, <strong>PPG</strong>, 
          <strong> Truper</strong>, <strong>Pretul</strong> y muchas más, garantizando calidad y confianza 
          en cada uno de nuestros servicios y productos.
        </Typography>
      </Container>
    </Box>
  );
};

export default UnidadesDeNegocio;
