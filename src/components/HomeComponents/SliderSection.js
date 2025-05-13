import React from 'react';
import { Box } from '@mui/material';
import SwiperSlider from '../SwiperSlider';

const slides = [
  {
    id: 'empresa',
    title: 'Bienvenido a Grupo Velzra',
    description: 'Expertos en recubrimientos industriales, innovación y soluciones a medida.',
    link: '/about',
    imageUrl: '/sliderhome/portada.png', // Corrected path
  },

   {
    id: 'Unidades de negocio',
    title: 'Nuestras unidades de negocio',
    description: 'Conoce las empresas que forman parte de nuestro grupo.',
    link: '/unidades-de-negocio',
    imageUrl: '/sliderhome/portada2.png', // Corrected path
  },
{
  id: 'impulsando-talento',
  title: 'Impulsando el Talento',
  description: 'Apoyamos el automovilismo en eventos como NASCAR México y Nations Panama City 200, colaborando con marcas como Glidden Stores y PPG México.',
  link: '/patrocinados',
  imageUrl: '/sliderhome/portada3.png',
}

];

const SliderSection = () => {
  return (
    <Box sx={{ height: '800px', overflow: 'hidden' }}>
      <SwiperSlider slides={slides} />
    </Box>
  );
};

export default SliderSection;
