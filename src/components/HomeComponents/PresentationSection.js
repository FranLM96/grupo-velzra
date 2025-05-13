import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Divider, Fade, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles'; // Import useTheme

const PresentationSection = () => {
  const { t } = useTranslation();
  const theme = useTheme(); // Access the theme

  // State to hold the list of brand icon filenames
  const [brandIcons, setBrandIcons] = useState([]);

  // Effect to fetch brand icons when the component mounts
  useEffect(() => {
    const fetchIcons = async () => {
      try {
        // TODO: Implement actual logic to fetch the list of icon filenames
        // from the public/brands/ directory. This might involve:
        // 1. A backend API endpoint that returns a JSON list of filenames.
        // 2. A build-time process that generates a static JSON file with filenames.
        // 3. Using a server-side rendering approach.
        //
        // For now, we'll simulate fetching a list of icons.
        // Replace this with your actual data fetching logic.

        // Example simulation:
        // In a real application, you would fetch this list dynamically.
        // For demonstration, we'll use the known file from the directory listing.
        const icons = ['icon1.svg']; // Replace with fetched data

        setBrandIcons(icons);

      } catch (error) {
        console.error("Error fetching brand icons:", error);
        // Optionally set an error state or display a fallback UI
      }
    };

    fetchIcons();
  }, []); // Empty dependency array ensures this runs only once on mount


  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        // Using theme colors for background and text
        bgcolor: theme.palette.primary.main, // Use primary color (orange) for background
        color: theme.palette.text.primary, // Use primary text color (white)
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={800}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Typography
                variant="h3"
                fontWeight="bold"
                // Ensure text color is readable on the background
                sx={{ color: theme.palette.text.primary, fontSize: { xs: '2rem', md: '3rem' } }}
              >
                {t('¿Quiénes somos?')}
              </Typography>
              <Divider
                sx={{
                  width: 80,
                  height: 4,
                  // Use a contrasting color for the divider
                  backgroundColor: theme.palette.text.primary, // Use primary text color (white)
                  mx: 'auto',
                  my: 2,
                  borderRadius: 2,
                }}
              />
            </Grid>

            <Grid item xs={12} md={10}>
              <Typography
                variant="h6"
                // Adjust text color for readability on the background
                sx={{ color: theme.palette.text.primary, fontWeight: 400, mb: 2 }}
              >
                {t('Desde 1997, en')}{' '}
                <Box
                  component="span"
                  // Adjust text color for readability on the background
                  sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}
                >
                  {t('Grupo Velzra')}
                </Box>{' '}
                {t(
                  'brindamos soluciones de alto impacto en recubrimientos industriales, protección anticorrosiva y mantenimiento técnico. Con presencia en México y Panamá, más de 25 años de experiencia y un equipo experto, garantizamos calidad, eficiencia y confianza en cada proyecto.'
                )}
              </Typography>

              <Typography
                variant="body1"
                // Adjust text color for readability on the background
                sx={{ color: theme.palette.text.primary, lineHeight: 1.7 }}
              >
                {t(
                  'Somos aliados estratégicos de la industria: protegemos activos, optimizamos procesos y construimos relaciones duraderas con innovación, compromiso y excelencia.'
                )}
              </Typography>
            </Grid>

            {/* Gallery Section */}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                fontWeight="bold"
                // Ensure text color is readable on the background
                sx={{ color: theme.palette.text.primary, mt: 4, mb: 3 }}
              >
                {t('Marcas')}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {/* Map over the dynamically loaded brandIcons state */}
                {brandIcons.map((icon, index) => (
                  <Grid item xs={6} sm={4} md={2.4} key={index}>
                    <Box
                      sx={{
                        width: '100%',
                        paddingTop: '100%', // 1:1 Aspect Ratio
                        backgroundImage: `url(/brands/${icon})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        borderRadius: 2,
                        boxShadow: 3,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {/* End Gallery Section */}

            {/* Call to Action */}
            <Grid item xs={12} mt={5}>
              <IconButton
                sx={{
                  // Use theme colors for the icon button
                  color: theme.palette.text.primary, // Icon color (white)
                  backgroundColor: theme.palette.primary.main, // Background color (orange)
                  padding: 2,
                  borderRadius: '50%',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark, // Use a darker shade on hover
                  },
                }}
                href="/about"
              >
                <ArrowForwardIcon />
              </IconButton>
            </Grid>
            {/* End Call to Action */}
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default PresentationSection;
