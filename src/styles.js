import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F57C00', // Naranja de Construcción
    },
    secondary: {
      main: '#EEEEEE', // Gris Secundario (manteniendo el existente o ajustar si es necesario)
    },
    warning: {
      main: '#FFC107', // Amarillo de Construcción/Seguridad
    },
    background: {
      default: '#000000', // Negro Principal/Fondo Oscuro
      paper: '#1E1E1E', // Adjusted to a slightly lighter dark grey
    },
    text: {
      primary: '#FFFFFF', // Texto blanco sobre fondos oscuros
      secondary: '#A0A0A0', // Adjusted to a slightly darker grey for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', // Changed to Roboto
  },
  components: {
    // Puedes añadir overrides para componentes de Material UI aquí si es necesario
    // Por ejemplo, para asegurar que los botones o AppBar usen los nuevos colores por defecto
  },
});

export default theme;