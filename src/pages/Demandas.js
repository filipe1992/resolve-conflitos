import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Footer from '../components/Footer';

function Demandas() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const demandas = [
    {
      tipo: 'geral',
      titulo: 'Demandas em Geral',
      descricao: 'Conflitos de natureza diversa que podem ser resolvidos através da mediação.',
    },
    {
      tipo: 'empresarial',
      titulo: 'Demandas Empresariais',
      descricao: 'Conflitos envolvendo relações entre empresas e questões comerciais.',
    },
    {
      tipo: 'saude',
      titulo: 'Demandas de Saúde Pública',
      descricao: 'Conflitos relacionados à área da saúde e serviços públicos.',
    },
  ];

  return (
    <Container maxWidth="sm" sx={{ px: isMobile ? 1 : 2 }}>
      <Box sx={{ mt: isMobile ? 2 : 4, mb: isMobile ? 2 : 4 }}>
        <Typography variant={isMobile ? 'h5' : 'h4'} component="h1" gutterBottom align="center">
          Como podemos ajudar?
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 4, fontSize: isMobile ? '1rem' : '1.1rem' }}>
          Selecione o tipo de demanda que melhor se adequa ao seu caso:
        </Typography>
        <Grid container spacing={isMobile ? 1 : 2}>
          {demandas.map((demanda) => (
            <Grid item xs={12} key={demanda.tipo}>
              <Paper elevation={3} sx={{ p: isMobile ? 2 : 3 }}>
                <Typography variant={isMobile ? 'subtitle1' : 'h6'} gutterBottom>
                  {demanda.titulo}
                </Typography>
                <Typography variant="body2" paragraph sx={{ fontSize: isMobile ? '0.95rem' : '1rem' }}>
                  {demanda.descricao}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size={isMobile ? 'medium' : 'large'}
                  onClick={() => navigate(`/demandas/${demanda.tipo}`)}
                >
                  Selecionar
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
}

export default Demandas; 