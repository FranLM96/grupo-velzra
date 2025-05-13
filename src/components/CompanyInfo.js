import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useTheme } from '@mui/material/styles'; // Import useTheme

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

        <Typography
          variant="h6"
          align="center"
          sx={{ color: theme.palette.text.secondary, mb: 5, maxWidth: 800, mx: 'auto', lineHeight: 1.8 }} /* Use theme secondary text color */
        >
          En <Box component="span" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>Grupo Velzra</Box> somos más que un proveedor: {/* Use theme primary text color */}
          somos tu aliado estratégico. Creamos soluciones a la medida que elevan la calidad, optimizan procesos y consolidan confianza.
        </Typography>

        {/* Sección con iconos e ideas clave */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ textAlign: 'center', p: 3, borderRadius: 3, bgcolor: theme.palette.background.paper }}> {/* Use theme paper background */}
              <EmojiObjectsIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} /> {/* Use theme primary color */}
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>Innovación constante</Typography> {/* Use theme primary text color */}
                <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
                  Diseñamos soluciones técnicas con creatividad y precisión, adaptadas a cada desafío industrial.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ textAlign: 'center', p: 3, borderRadius: 3, bgcolor: theme.palette.background.paper }}> {/* Use theme paper background */}
              <EngineeringIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} /> {/* Use theme primary color */}
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>Expertise técnico</Typography> {/* Use theme primary text color */}
                <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
                  Más de 10 años aplicando recubrimientos industriales con estándares de calidad inquebrantables.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ textAlign: 'center', p: 3, borderRadius: 3, bgcolor: theme.palette.background.paper }}> {/* Use theme paper background */}
              <HandshakeIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} /> {/* Use theme primary color */}
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>Relaciones duraderas</Typography> {/* Use theme primary text color */}
                <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
                  Cada cliente es único. Creamos lazos sólidos basados en resultados, compromiso y confianza.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

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
