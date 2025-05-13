import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const SingleBusinessUnitView = ({ businessUnit }) => {
  if (!businessUnit) {
    return null; // Or render a message indicating no data
  }

  return (
    <Box sx={{ py: 4 }}>
      <Card elevation={8} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
        <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
          <Grid container spacing={4}>
            {/* Image Section */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={businessUnit.imageUrl}
                alt={businessUnit.title}
                sx={{
                  width: '100%',
                  height: { xs: 200, sm: 300, md: 'auto' },
                  maxHeight: 400,
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            </Grid>

            {/* Details Section */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ mb: 2 }}>
                  <Box
                    component="img"
                    src={businessUnit.logoUrl}
                    alt={`${businessUnit.title} logo`}
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: 'contain',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
                    {businessUnit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {businessUnit.description}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {businessUnit.aboutBrand}
                  </Typography>
                </Box>

                {/* Gallery Images */}
                {businessUnit.galleryImages && businessUnit.galleryImages.length > 0 && (
                  <Box sx={{ mt: 'auto' }}> {/* Push gallery to the bottom */}
                    <Typography variant="h6" gutterBottom>
                      Gallery
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {businessUnit.galleryImages.map((img, i) => (
                        <Box
                          key={i}
                          component="img"
                          src={img}
                          alt={`Gallery image ${i + 1}`}
                          sx={{
                            width: '100%', maxWidth: '30%',
                            flex: '1 1 auto',
                            borderRadius: 1,
                            objectFit: 'cover',
                            height: 60,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SingleBusinessUnitView;