import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles'; // Import useTheme

// Configuración del carrusel
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Subsidiaries = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box sx={{ py: 5, textAlign: 'center', color: theme.palette.text.primary }}> {/* Ensure title uses primary text color */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Subsidiaries
      </Typography>

      {/* Carrusel de Subsidiarias */}
      <Slider {...carouselSettings}>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Filial 1: Grupo Velzra México
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
            Especialistas en recubrimientos industriales y soluciones técnicas.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Filial 2: Velzra Panamá
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
            Expansión de nuestras soluciones industriales en el mercado internacional.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Filial 3: Velzra Proyectos
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
            Desarrollo de proyectos llave en mano en diversos sectores.
          </Typography>
        </Box>
      </Slider>
    </Box>
  );
};

export default Subsidiaries;
