import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompanyInfo from './pages/CompanyInfo';
import Subsidiaries from './pages/Subsidiaries';
import ContactForm from './pages/ContactForm';
import UnidadesDeNegocio from './pages/UnidadesDeNegocio';
import BusinessUnitServicesPage from './pages/BusinessUnitServicesPage'; // Import the new page component
import ImpulsandoTalentoPage from './pages/ImpulsandoTalentoPage'; // Import the new page component
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles';
import { useTranslation } from 'react-i18next';
import SliderSection from './components/HomeComponents/SliderSection';

// import BusinessUnitsSection from './components/BusinessUnitsSection'; // Commented out


function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Box sx={{ height: '700px' }}>
                <SliderSection />
              </Box>
              <Home />
               {/* Added ServiceCarousel */}
            </>
          } />
          <Route path="/unidades-de-negocio" element={<UnidadesDeNegocio />} />
          <Route path="/about" element={<CompanyInfo />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/filiales/subsidiaries" element={<Subsidiaries />} />
          {/* Add the new route for business unit services */}
<Route path="/patrocinados" element={<ImpulsandoTalentoPage />} />
          <Route path="/services/:businessUnitSlug" element={<BusinessUnitServicesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
