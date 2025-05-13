import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Stack,
  Divider,
} from '@mui/material';
import {
  Facebook,
  LinkedIn,
  Instagram,
  Email,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 8 },
      }}
    >
      <Grid container spacing={6}>
        {/* Logo y descripción */}
        <Grid item xs={12} md={4}>
          <Link href="/" underline="none">
            <Box component="img"
              src={require('../assets/logo.svg').default}
              alt="Velzra Logo"
              sx={{ height: 60, mb: 2, filter: 'brightness(1.2)' }}
            />
          </Link>
          <Typography variant="body2" color="text.secondary">
            {t('Soluciones integrales en recubrimientos industriales, eficiencia energética y mantenimiento técnico.')}
          </Typography>
        </Grid>

        {/* Enlaces rápidos */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            {t('Enlaces')}
          </Typography>
          <Stack spacing={1}>
            {[
              { label: t('Inicio'), href: '/' },
              { label: t('Nosotros'), href: '/about' },
              { label: t('Unidades de negocio'), href: '/unidades-de-negocio' },
{ label: t('Impulsando el Talento'), href: '/patrocinados' },
              { label: t('Contacto'), href: '/contacto' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                underline="hover"
                sx={{
                  color: theme.palette.text.secondary,
                  transition: 'color 0.3s',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </Grid>

        {/* Redes sociales */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            {t('Conecta con nosotros')}
          </Typography>
          <Stack direction="row" spacing={2}>
            {[
              {
                href: 'https://www.facebook.com/100087222829837',
                icon: <Facebook />,
                label: 'Facebook',
              },
              {
                href: 'https://www.instagram.com/grupovelzra/',
                icon: <Instagram />,
                label: 'Instagram',
              },
              {
                href: 'https://mx.linkedin.com/company/tecnologia-en-recubrimientos-velzra-sa-de-cv',
                icon: <LinkedIn />,
                label: 'LinkedIn',
              },
              {
                href: 'mailto:contacto@velzra.com',
                icon: <Email />,
                label: 'Email',
              },
            ].map((item) => (
              <IconButton
                key={item.label}
                href={item.href}
                target="_blank"
                aria-label={item.label}
                sx={{
                  color: theme.palette.text.secondary,
                  transition: 'color 0.3s',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Divider + Derechos reservados */}
      <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
      <Box textAlign="center">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          © {currentYear} Grupo Velzra. {t('Todos los derechos reservados.')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('Creado por')} <strong>Francisco Luna</strong>.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
