import React from 'react';
import { Box, Container, Typography, Link, useTheme, useMediaQuery } from '@mui/material';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        backgroundColor: '#f5f5f5',
        py: isMobile ? 1 : 2,
        mt: 'auto',
        borderTop: '1px solid #e0e0e0',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      <Container maxWidth="lg" sx={{ px: isMobile ? 1 : 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            Desenvolvido pela Equipe de Extensão da Faculdade Estácio
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            Thaylane Ravena Gomes De Oliveira
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', mt: 1 }}>
            Desenvolvimento: Fire Bunny
          </Typography>
          <Link
            href="mailto:fire.bunny.developer@gmail.com"
            color="inherit"
            sx={{ 
              fontSize: '0.8rem',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            fire.bunny.developer@gmail.com
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 