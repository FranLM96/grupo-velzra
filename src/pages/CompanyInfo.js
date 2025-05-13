import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useTheme } from '@mui/material/styles'; // Import useTheme

const galleryImages = [
  { src: '/images/project1.jpg', title: 'Recubrimiento de tuberías' },
  { src: '/images/project2.jpg', title: 'Línea de producción optimizada' },
  { src: '/images/project3.jpg', title: 'Inspección de calidad' },
  { src: '/images/project4.jpg', title: 'Entrega puntual' },
];

const CompanyInfo = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box sx={{ py: 10, bgcolor: theme.palette.background.default, color: theme.palette.text.primary }}> {/* Use theme background and text color */}
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          sx={{ color: theme.palette.primary.main, mb: 3 }} /* Use theme primary color */
        >
          Transformamos retos en soluciones reales
        </Typography>

        {/* Descripción mejorada */}
        <Typography
          variant="h6"
          align="center"
          sx={{ color: theme.palette.text.secondary, mb: 5, maxWidth: 800, mx: 'auto', lineHeight: 1.8 }} /* Use theme secondary text color */
        >
          En <Box component="span" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>Grupo Velzra</Box>, {/* Use theme primary text color */}
          combinamos más de una década de experiencia en recubrimientos industriales con un enfoque
          innovador y sostenible. Nuestra misión es elevar tus procesos productivos a través de
          soluciones personalizadas que aumenten la durabilidad, optimicen costos y promuevan la
          responsabilidad ambiental. Nos enorgullece ser el aliado estratégico de empresas líderes,
          garantizando calidad, eficiencia y confianza en cada proyecto.
        </Typography>

        {/* Sección con iconos e ideas clave */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ textAlign: 'center', p: 3, borderRadius: 3, bgcolor: theme.palette.background.paper }}> {/* Use theme paper background */}
              <EmojiObjectsIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} /> {/* Use theme primary color */}
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
                  Innovación constante
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
                  Diseñamos soluciones técnicas con creatividad y precisión, adaptadas a cada desafío
                  industrial.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ textAlign: 'center', p: 3, borderRadius: 3, bgcolor: theme.palette.background.paper }}> {/* Use theme paper background */}
              <EngineeringIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} /> {/* Use theme primary color */}
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
                  Expertise técnico
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
                  Más de 10 años aplicando recubrimientos industriales con estándares de calidad
                  inquebrantables.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ textAlign: 'center', p: 3, borderRadius: 3, bgcolor: theme.palette.background.paper }}> {/* Use theme paper background */}
              <HandshakeIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} /> {/* Use theme primary color */}
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
                  Relaciones duraderas
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
                  Cada cliente es único. Creamos lazos sólidos basados en resultados, compromiso y
                  confianza.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Galería llamativa */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.primary.main, mb: 4 }}> {/* Use theme primary color */}
            Nuestro trabajo en acción
          </Typography>
          <Grid container spacing={2}>
            {galleryImages.map((img, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)', // Keep shadow color
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.title}
                    sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                  />
                  <CardContent sx={{ bgcolor: theme.palette.background.paper }}> {/* Use theme paper background */}
                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}> {/* Use theme primary text color */}
                      {img.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Cierre inspirador */}
        <Typography
          variant="h6"
          align="center"
          sx={{ color: theme.palette.text.secondary, mt: 6, fontStyle: 'italic' }} /* Use theme secondary text color */
        >
          En cada proyecto, vemos la oportunidad de hacer historia contigo.
        </Typography>
      </Container>
    </Box>
  );
};

export default CompanyInfo;
