import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'; // Import useTheme

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper-custom.css';

const SwiperSlider = ({ slides = [] }) => {
  const theme = useTheme(); // Access the theme

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
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id || index}>
            {/* Image Background */}
            <Box
              component="img"
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
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

            {/* Slide Content */}
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
                minHeight: '500px', // Ensure content box covers the slider height
              }}
            >
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                {slide.title}
              </Typography>
              <Typography variant="h6" sx={{ mb: 3 }}>
                {slide.description}
              </Typography>
              {slide.link && (
                <Button
                  component={RouterLink}
                  to={slide.link}
                  variant="contained"
                  color="primary" // This will use the updated primary color from the theme
                >
                  Más Información
                </Button>
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperSlider;