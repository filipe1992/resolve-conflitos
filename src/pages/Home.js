import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="sm" sx={{ px: isMobile ? 1 : 2 }}>
      <Box sx={{ mt: isMobile ? 2 : 4, mb: isMobile ? 2 : 4 }}>
        <Paper elevation={3} sx={{ p: isMobile ? 2 : 3, textAlign: 'center' }}>
          <Typography variant={isMobile ? 'h5' : 'h4'} component="h1" gutterBottom>
            CEJUSC
          </Typography>
          <Typography variant={isMobile ? 'subtitle1' : 'h6'} gutterBottom>
            Centro Judiciário de Solução de Conflitos e Cidadania
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? '1rem' : '1.1rem' }}>
            O CEJUSC é um órgão especializado do Poder Judiciário que visa promover a solução consensual de conflitos, 
            contribuindo para a pacificação social e o acesso à justiça.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size={isMobile ? 'medium' : 'large'}
            onClick={() => navigate('/demandas')}
            sx={{ mt: 2, width: '100%' }}
          >
            Como o CEJUSC pode me ajudar?
          </Button>
        </Paper>
      </Box>
      <Footer />
    </Container>
  );
}

export default Home; 