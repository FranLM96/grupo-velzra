import React from 'react';
import { Box, Typography } from '@mui/material';

const ImpulsandoTalentoPage = () => {
  const pageData = {
    id: 'impulsando-talento',
    title: 'Impulsando el Talento',
    description: 'Apoyamos el automovilismo en eventos como NASCAR México y Nations Panama City 200, colaborando con marcas como Glidden Stores y PPG México.',
    link: '/patrocinados',
    imageUrl: '/sliderhome/portada3.png',
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {pageData.title}
      </Typography>
      <Box
        component="img"
        src={pageData.imageUrl}
        alt={pageData.title}
        sx={{
          maxWidth: '100%',
          height: 'auto',
          marginBottom: 2,
        }}
      />
      <Typography variant="body1">
        {pageData.description}
      </Typography>
      {/* Add more content related to the sponsorship here */}
    </Box>
  );
};

export default ImpulsandoTalentoPage;