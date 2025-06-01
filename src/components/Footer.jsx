// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 2,
        backgroundColor: (theme) => 
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: 'center'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Desenvolvido por:
      </Typography>
      
      <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1 }}>
        Fire Bunny Development
      </Typography>
      
      <Typography variant="body2" sx={{ mt: 0.5 }}>
        Filipe Damasceno Coelho
      </Typography>
      
      <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link 
          href="mailto:fire.bunny.developer@gmail.com"
          color="inherit"
          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
        >
          fire.bunny.developer@gmail.com
        </Link>
        
        <Link 
          href="https://wa.me/555591981440196?text=eu%20vim%20pelo%20app%20resolve%20conflitos,%20pode%20me%20ajudar?"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{ 
            mt: 1,
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' } 
          }}
        >
          +55 91 9 8144-0196
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;