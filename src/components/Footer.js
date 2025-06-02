import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#f5f5f5',
        py: 2,
        mt: 'auto',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            Desenvolvido pela Equipe de Extensão da Faculdade Estácio
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            Thaylane Ravena Deoliveira Gomes
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