import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import businessUnitsData from '../../data/businessUnitsData';
import { useTheme } from '@mui/material/styles'; // Import useTheme

const BusinessUnitCardsSection = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box sx={{ py: 6, bgcolor: theme.palette.background.default }}> {/* Use theme default background color */}
      <Typography variant="h4" align="center" fontWeight="bold" sx={{ color: theme.palette.text.primary, mb: 6 }}> {/* Use theme primary text color */}
       Nuestras unidades de negocio
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {businessUnitsData.map((unit) => (
          <Grid item key={unit.slug} xs={12} sm={6} md={4}>
            <Card
              component={Link}
              to={`/unidades-de-negocio#${unit.slug}`}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Add transition for smooth animation
                '&:hover': {
                  transform: 'scale(1.03)', // Scale up slightly on hover
                  boxShadow: 10, // Increase shadow on hover
                },
                maxWidth: 500, // Set max width for the card
                margin: 'auto', // Center the card within the grid item
                bgcolor: theme.palette.background.paper, // Use theme paper background for cards
                color: theme.palette.text.primary, // Use theme primary text color for card text
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={unit.imageUrl}
                alt={unit.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {unit.title}
                </Typography>
                <Typography variant="body2" color="text.secondary"> {/* This already uses theme secondary text color */}
                  {/* Display description */}
                  {unit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BusinessUnitCardsSection;