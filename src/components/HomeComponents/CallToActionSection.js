import React from 'react';
import { Box, Typography, Container, Button, Fade } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles'; // Import useTheme

const CallToActionSection = () => {
  const { t } = useTranslation();
  const theme = useTheme(); // Access the theme

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        textAlign: 'center',
        bgcolor: theme.palette.background.default, // Use theme background color
        color: theme.palette.text.primary, // Use theme text color
      }}
    >
      <Container maxWidth="sm">
        <Fade in timeout={1000}>
          <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              {t('¿Listo para trabajar con nosotros?')}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t('Contáctanos hoy mismo y cotiza tu proyecto con Grupo Velzra.')}
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="primary" // Use primary color from theme
              sx={{
                mt: 3,
                px: 5,
                py: 1.5,
                fontWeight: 'bold',
              }}
            >
              {t('Contáctanos')}
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default CallToActionSection;