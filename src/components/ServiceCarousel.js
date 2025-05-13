import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Modal, // Import Modal
  IconButton, // Import IconButton for close button
}
from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import businessUnitsData from '../data/businessUnitsData';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ServiceCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openModal, setOpenModal] = useState(false); // State for modal visibility
  const [selectedImage, setSelectedImage] = useState(''); // State for selected image URL
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up('sm'));
  const location = useLocation();
  const carouselRef = useRef(null); // Create a ref for the carousel container

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      const index = businessUnitsData.findIndex(unit => unit.slug === hash);
      if (index !== -1) {
        setActiveStep(index);
        // Scroll the carousel into view after setting the active step
        if (carouselRef.current) {
          carouselRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    } else {
       // If no hash, scroll to the top of the carousel when the component mounts
       if (carouselRef.current) {
          carouselRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
       }
    }
  }, [location.hash]); // Depend on location.hash to re-run when it changes

  const handleStepChange = (step) => {
    setActiveStep(step);
    const newHash = businessUnitsData[step]?.slug;
    if (newHash) {
      window.history.replaceState(null, null, `#${newHash}`);
    }
  };

  // Handle image click to open modal
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpenModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(''); // Clear selected image on close
  };

  const renderNavButtons = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isTabletUp ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        p: 1,
        backgroundColor: theme.palette.background.default, // Use theme background color
        borderRight: isTabletUp ? `1px solid ${theme.palette.divider}` : 'none', // divider color is not defined, keep as is or define in theme
        overflowX: isTabletUp ? 'unset' : 'auto',
        width: isTabletUp ? '100px' : '100%',
      }}
    >
      {businessUnitsData.map((item, index) => (
        <Button
          key={index}
          onClick={() => handleStepChange(index)}
          variant="text"
          color="primary" // Keep primary color for icon/text if needed, or adjust
          sx={{
            minWidth: 64,
            width: 64,
            height: 64,
            p: 0,
            flexShrink: 0,
            backgroundColor: theme.palette.secondary.main, // Use theme secondary color
            border: activeStep === index ? `2px solid ${theme.palette.primary.main}` : 'none',
            borderRadius: 1,
            '&:hover': {
              backgroundColor: theme.palette.action.hover, // Use theme hover effect
            },
          }}
        >
          <Box
            component="img"
            src={item.logoUrl}
            alt={item.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Button>
      ))}
    </Box>
  );

  const renderCard = (item, index) => (
    <Card
      key={index}
      elevation={6}
      sx={{
        width: '100%',
        borderRadius: 0,
        backgroundColor: theme.palette.background.paper, // Use theme paper background color
        color: theme.palette.text.primary, // Use theme primary text color
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box
          component="img"
          src={item.imageUrl}
          alt={item.title}
          sx={{
            width: '100%',
            height: { xs: 200, sm: 300 },
            objectFit: 'cover',
          }}
        />
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight={700} mb={1} sx={{ color: theme.palette.text.primary }}> {/* Use theme primary text color */}
            {item.title}
          </Typography>
          <Typography variant="body1" mb={2} sx={{ color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
            {item.description}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {item.galleryImages?.map((img, i) => (
              <Box
                key={i}
                component="img"
                src={img}
                alt={`Gallery ${i + 1}`}
                sx={{
                  width: '30%',
                  minWidth: 80,
                  height: 80,
                  objectFit: 'cover',
                  borderRadius: 2,
                  cursor: 'pointer', // Add cursor pointer to indicate clickability
                }}
                onClick={() => handleImageClick(img)} // Add click handler
              />
            ))}
          </Box>

          {item.aboutBrand && (
            <Typography variant="body2" mt={2} sx={{ color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
              {item.aboutBrand}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box ref={carouselRef} sx={{ width: '100%', overflow: 'hidden' }}> {/* Attach the ref here */}
      {isTabletUp ? (
        <Box sx={{ display: 'flex', width: '100%' }}>
          {/* Botones en columna para escritorio */}
          {renderNavButtons()}
          {/* Carrusel */}
          <Box sx={{ width: 'calc(100% - 100px)' }}> {/* Explicitly set width */}
            <AutoPlaySwipeableViews
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              interval={90000}
              style={{ width: '100%' }}
            >
              {businessUnitsData.map(renderCard)}
            </AutoPlaySwipeableViews>
          </Box>
        </Box>
      ) : (
        // Vista móvil: botones arriba del carrusel
        <Box>
          {renderNavButtons()}
          <AutoPlaySwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={90000}
            style={{ width: '100%' }}
          >
            {businessUnitsData.map(renderCard)}
          </AutoPlaySwipeableViews>
        </Box>
      )}

      {/* Image Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="image-modal-title"
        aria-describedby="image-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper', // Use theme paper background
            boxShadow: 24,
            p: 2,
            maxWidth: '90%',
            maxHeight: '90%',
            outline: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500], // Keep existing theme grey color
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={selectedImage}
            alt="Enlarged gallery image"
            sx={{
              maxWidth: '100%',
              maxHeight: 'calc(100vh - 64px)', // Adjust max height considering close button
              objectFit: 'contain',
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default ServiceCarousel;
