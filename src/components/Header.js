import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Collapse,
  Button,
  useMediaQuery,
  useTheme,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.svg';
import businessUnitsData from '../data/businessUnitsData';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openBusinessUnits, setOpenBusinessUnits] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const toggleDrawer = (open) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerOpen(open);
  };

  const handleBusinessUnitsClick = () => {
    setOpenBusinessUnits(!openBusinessUnits);
  };

 const navItems = [
  { label: 'Inicio', path: '/' },
  {
    label: 'Unidades de negocio',
    children: businessUnitsData.map(unit => ({
      label: unit.title,
      path: `/unidades-de-negocio/#${unit.slug}`, // Corregido
      logoUrl: unit.logoUrl
    }))
  },
  { label: 'Nosotros', path: '/about' },
  { label: 'Contacto', path: '/contact' },
];


  const list = () => (
    <Box
      sx={{
        width: 260,
        bgcolor: theme.palette.background.paper,
        height: '100%',
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <img src={logo} alt="Logo" style={{ height: 40 }} />
      </Box>
      <Divider sx={{ bgcolor: '#222' }} />
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.label}>
            <ListItem
              button
              component={item.children ? 'div' : Link}
              {...(!item.children && { to: item.path })}
              onClick={item.children ? handleBusinessUnitsClick : toggleDrawer(false)}
              sx={{
                '&:hover': {
                  bgcolor: theme.palette.action.hover,
                },
                transition: '0.3s',
              }}
            >
              <ListItemText
                primary={t(item.label)}
                primaryTypographyProps={{
                  sx: {
                    color: item.label === 'Home' ? theme.palette.primary.main : theme.palette.text.secondary,
                    fontWeight: item.label === 'Home' ? 'bold' : 'normal',
                    fontSize: item.label === 'Unidades de negocio' ? '0.9rem' : 'inherit',
                  },
                }}
              />
            </ListItem>
            {item.children && (
              <Collapse in={isDesktop || openBusinessUnits} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((childItem) => (
                    <ListItem key={childItem.label} sx={{ pl: 4 }}>
                      <Button
                        component={Link}
                        to={childItem.path}
                        onClick={toggleDrawer(false)}
                        variant="text"
                        color="primary"
                        startIcon={
                          <Box
                            component="img"
                            src={childItem.logoUrl}
                            alt={childItem.label}
                            sx={{
                              height: 32,
                              width: 32,
                              objectFit: 'contain',
                              bgcolor: '#d3d3d3', // Fondo gris claro
                              p: 0.5,
                              borderRadius: '4px',
                            }}
                          />
                        }
                        sx={{
                          flex: 1,
                          justifyContent: 'flex-start',
                          color: theme.palette.text.secondary,
                          '&:hover': {
                            bgcolor: theme.palette.action.hover,
                          },
                        }}
                      >
                        {t(childItem.label)}
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        }}
      >
        <Toolbar sx={{ padding: isDesktop ? '0 2rem' : '0' }}>
          <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '1rem' }} />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', '&:hover': { color: theme.palette.primary.main } }}>
                {/* Nombre de la marca */}
              </Typography>
            </Link>

            {isDesktop ? (
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <React.Fragment key={item.label}>
                    {item.children ? (
                      <Box>
                        <Button
                          onClick={handleBusinessUnitsClick}
                          sx={{ color: 'white', fontWeight: 'bold', '&:hover': { color: theme.palette.primary.main } }}
                        >
                          {t(item.label)}
                        </Button>
                        <Collapse in={openBusinessUnits} timeout="auto" unmountOnExit>
                          <Box sx={{
                            position: 'absolute',
                            top: '100%',
                            left: 'auto',
                            bgcolor: theme.palette.background.paper,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                            zIndex: 1300,
                            minWidth: 200,
                            p: 1
                          }}>
                            <List component="div" disablePadding>
                              {item.children.map((childItem) => (
                                <ListItem key={childItem.label} sx={{ p: 0 }}>
                                  <Button
                                    component={Link}
                                    to={childItem.path}
                                    onClick={() => setOpenBusinessUnits(false)}
                                    variant="text"
                                    color="primary"
                                    startIcon={
                                      <Box
                                        component="img"
                                        src={childItem.logoUrl}
                                        alt={childItem.label}
                                        sx={{
                                          height: 24,
                                          width: 24,
                                          objectFit: 'contain',
                                          mr: 1,
                                          bgcolor: '#d3d3d3', // Fondo gris claro
                                          p: 0.5,
                                          borderRadius: '4px',
                                        }}
                                      />
                                    }
                                    sx={{
                                      flex: 1,
                                      justifyContent: 'flex-start',
                                      color: theme.palette.text.secondary,
                                      '&:hover': {
                                        bgcolor: theme.palette.action.hover,
                                      },
                                      py: 1,
                                      px: 1.5,
                                      textTransform: 'none'
                                    }}
                                  >
                                    {t(childItem.label)}
                                  </Button>
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        </Collapse>
                      </Box>
                    ) : (
                      <Button key={item.label} component={Link} to={item.path} sx={{ color: 'white', fontWeight: 'bold', '&:hover': { color: theme.palette.primary.main } }}>
                        {t(item.label)}
                      </Button>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ color: 'white', '&:hover': { color: theme.palette.primary.main } }}
              >
                <MenuIcon sx={{ bgcolor: '#d3d3d3', borderRadius: '50%', padding: 0.5 }} />
              </IconButton>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      <Toolbar />

      {isDesktop ? null : (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      )}
    </>
  );
};

export default Header;
