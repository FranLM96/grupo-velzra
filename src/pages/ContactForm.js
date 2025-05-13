import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.svg';
import businessUnitsData from '../data/businessUnitsData';

const ContactForm = () => {
  const { t } = useTranslation();
  const theme = useTheme(); // Access the theme
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${t("Form submitted")}: ${JSON.stringify(formData, null, 2)}`);
    // Aquí puedes enviar los datos a una API, etc.
  };

  const inputStyles = {
    input: { color: theme.palette.text.primary }, // Use theme primary text color
    label: { color: theme.palette.text.secondary }, // Use theme secondary text color
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#555' }, // Use a dark grey for border
      '&:hover fieldset': { borderColor: theme.palette.primary.main }, // Use theme primary color on hover
    },
  };

  return (
    <Box sx={{ mt: 4, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, p: { xs: 3, md: 5 }, borderRadius: 2 }}> {/* Use theme paper background and primary text color */}
      {/* Logo */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img src={logo} alt="Velzra Logo" style={{ height: 80 }} />
      </Box>

      {/* Formulario */}
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {['name', 'email'].map((field) => (
            <Grid item xs={12} sm={6} key={field}>
              <TextField
                required
                fullWidth
                id={field}
                name={field}
                label={t(field === 'name' ? 'Name' : 'Email Address')}
                value={formData[field]}
                onChange={handleChange}
                autoComplete={field}
                sx={inputStyles}
                aria-label={field}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              id="message"
              name="message"
              label={t("Message")}
              value={formData.message}
              onChange={handleChange}
              autoComplete="off"
              sx={inputStyles}
              aria-label="message"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main, // Use theme primary color
                color: theme.palette.text.primary, // Use theme primary text color
                px: 4,
                py: 1.5,
                '&:hover': { backgroundColor: '#D84315' }, // Use a darker orange on hover
                fontWeight: 'bold',
                borderRadius: 2,
              }}
            >
              {t("Send Message")}
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Unidades de Negocio */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary }}> {/* Use theme primary text color */}
          {t("Our Business Units")}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {businessUnitsData.map((unit) => (
            <Grid item xs={12} sm={6} md={4} key={unit.slug}>
              <Box sx={{ textAlign: 'center' }}>
                <img
                  src={unit.imageUrl}
                  alt={unit.title}
                  style={{
                    width: '100%',
                    maxWidth: '180px',
                    height: 'auto',
                    borderRadius: '12px',
                    objectFit: 'contain',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)', // Keep shadow color
                  }}
                />
                <Typography variant="subtitle1" sx={{ mt: 2, color: theme.palette.text.secondary }}> {/* Use theme secondary text color */}
                  {t(unit.title)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactForm;
