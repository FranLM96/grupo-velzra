import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const businessUnitsData = [
  {
    title: 'Velzra Acabados',
    slug: 'velzra-acabados',
    description: 'Construcción de proyectos industriales llave en mano, desde cimentación hasta acabados; comercialización de productos PPG con presencia en México y Panamá, con atención enfocada al canal B2B.', // :contentReference[oaicite:0]{index=0}
    aboutBrand: 'Velzra Acabados, unidad de negocio de Grupo Velzra fundada en 1997, está especializada en ingeniería de recubrimientos y acabados industriales. Ofrece soluciones técnicas completas, combinando innovación y calidad para maximizar la eficiencia y durabilidad de cada proyecto.', // :contentReference[oaicite:1]{index=1}
    icon: <EngineeringIcon sx={{ fontSize: 70, color: '#FF4500' }} />,
    imageUrl: '/carrouselunidad/velzraacabados/portada.png',
    logoUrl: '/carrouselunidad/velzraacabados/logo.svg',
    galleryImages: [
      '/carrouselunidad/velzraacabados/img1.png',
      '/carrouselunidad/velzraacabados/img2.png',
      '/carrouselunidad/velzraacabados/img3.png',
    ],
  },
  {
    title: 'Veltor Grupo Industrial',
    slug: 'veltor-grupo-industrial',
    description: 'Soluciones constructivas y de mantenimiento para proyectos de alto impacto, incluyendo mantenimiento industrial, construcción y edificación, sistemas Mezcla Brava, Trupper y recubrimientos generales.', // :contentReference[oaicite:2]{index=2}
    aboutBrand: 'Veltor Grupo Industrial, parte de Grupo Velzra, ofrece servicios llave en mano de obras civiles y recubrimientos industriales. Atiende sectores petroquímico, energético, comercial, metalúrgico, minero y manufacturero en todo México desde su sede en CDMX.', // :contentReference[oaicite:3]{index=3}
    icon: <LocalShippingIcon sx={{ fontSize: 70, color: '#FF4500' }} />,
    imageUrl: '/carrouselunidad/VELTOR/portada.png',
    logoUrl: '/carrouselunidad/VELTOR/logo.svg',
    galleryImages: [
      '/carrouselunidad/VELTOR/img1.png',
      '/carrouselunidad/VELTOR/img2.png',
      '/carrouselunidad/VELTOR/img3.png',
    ],
  },
  {
    title: 'Soluciones Industriales',
    slug: 'soluciones-industriales',
    description: 'Servicios de construcción y edificación para segmentos de alto volumen, corporativos e industriales, con proyectos llave en mano y atención especializada.', // :contentReference[oaicite:4]{index=4}
    aboutBrand: 'Soluciones Industriales Constructora, filial de Grupo Velzra, brinda proyectos llave en mano en construcción y automatización de infraestructuras. Con más de 100 colaboradores, se enfoca en maximizar la eficiencia en plantas industriales y obras civiles de gran escala.', // :contentReference[oaicite:5]{index=5}
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 70, color: '#FF4500' }} />,
    imageUrl: '/carrouselunidad/soluciones/portada.png',
    logoUrl: '/carrouselunidad/soluciones/logo.svg',
    galleryImages: [
      '/carrouselunidad/soluciones/img1.png',
      '/carrouselunidad/soluciones/img2.png',
      '/carrouselunidad/soluciones/img3.png',
    ],
  },
 {
  title: 'Velac',
  slug: 'velac',
  description: 'Proveedor líder de materiales y suministros de construcción de alta calidad, con un catálogo que abarca desde materiales básicos hasta soluciones técnicas especializadas, garantizando disponibilidad inmediata, precios competitivos y asesoría experta en cada etapa de tu proyecto.',

  aboutBrand: 'Velac proporciona materiales y suministros estratégicos para proyectos de construcción de todos los tamaños. Nos comprometemos con la calidad, disponibilidad inmediata y asesoría técnica para apoyar a nuestros clientes en cada etapa del proyecto.',
  extendedDescription: 'Con una trayectoria sólida en el sector, Velac se ha consolidado como un socio confiable para ingenieros, arquitectos y desarrolladores. Nuestro catálogo incluye desde materiales básicos hasta soluciones técnicas especializadas, siempre garantizando productos certificados y precios competitivos. Además, contamos con un equipo de expertos que brinda atención personalizada, entregas puntuales y soporte en sitio para asegurar el éxito de cada obra. Ya sea una construcción residencial, comercial o de infraestructura, en Velac trabajamos con pasión para construir futuro.',
  icon: <BusinessIcon sx={{ fontSize: 70, color: '#FF4500' }} />,
  imageUrl: '/carrouselunidad/VELAC/portada.png',
  logoUrl: '/carrouselunidad/VELAC/logo.svg',
  galleryImages: [
    '/carrouselunidad/VELAC/img1.png',
    '/carrouselunidad/VELAC/img2.png',
    '/carrouselunidad/VELAC/img3.png',
  ],
},

  
  {
    title: 'Sport Marking',
    slug: 'sport-marking',
    description: 'Especialistas globales en marcaje de pistas de carreras, señalización de zonas de seguridad y pintura de suelos epóxicos para instalaciones deportivas.', // :contentReference[oaicite:6]{index=6}
    aboutBrand: 'Sport Marking es la unidad de negocio de Grupo Velzra dedicada a la señalización profesional para instalaciones deportivas y espacios públicos, utilizando pinturas de alta resistencia y técnicas especializadas para garantizar visibilidad y cumplimiento normativo.', // :contentReference[oaicite:7]{index=7}
    icon: <SupportAgentIcon sx={{ fontSize: 70, color: '#FF4500' }} />,
    imageUrl: '/carrouselunidad/sport/portada.png',
    logoUrl: '/carrouselunidad/sport/logo.svg',
    galleryImages: [
      '/carrouselunidad/sport/img1.png',
      '/carrouselunidad/sport/img2.png',
      '/carrouselunidad/sport/img3.png',
    ],
  },
];

export default businessUnitsData;
