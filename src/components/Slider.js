import React, { useState } from 'react';
import { MobileStepper, Button, Box, Typography, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Slider = ({ slides = [] }) => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % slides.length);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[activeStep] || {};

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: '500px',
        height: 'auto',
        position: 'relative',
        overflow: 'hidden',
        color: theme.palette.text.primary, // Use theme primary text color
      }}
      id="inicio"
    >
      {/* Image Background */}
      <Box
        component="img"
        src={currentSlide.imageUrl}
        alt={`Image ${activeStep + 1}`}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: -1,
          objectFit: 'cover',
        }}
      />

      {/* Contenido del slide activo */}
      <Box
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Keep semi-transparent black
        }}
        key={activeStep}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          {currentSlide.title}
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          {currentSlide.description}
        </Typography>
        {currentSlide.link && (
          <Button
            component={RouterLink}
            to={currentSlide.link}
            variant="contained"
            color="primary" // This will use the updated primary color from the theme
          >
            Más Información
          </Button>
        )}
      </Box>

      {/* Paginación del slider */}
      <MobileStepper
        position="static"
        variant="dots"
        steps={slides.length}
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={slides.length === 0}>
            Siguiente
            {theme.direction === 'rtl'
              ? <KeyboardArrowLeft />
              : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0 || slides.length === 0}>
            {theme.direction === 'rtl'
              ? <KeyboardArrowRight />
              : <KeyboardArrowLeft />}
            Anterior
          </Button>
        }
        sx={{
          backgroundColor: 'transparent', // Keep transparent background
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex: 2,
        }}
      />
    </Box>
  );
};

export default Slider;
