import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
} from '@mui/material';
import Footer from '../components/Footer';

function Demandas() {
  const navigate = useNavigate();

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
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Como podemos ajudar?
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
          Selecione o tipo de demanda que melhor se adequa ao seu caso:
        </Typography>
        <Grid container spacing={2}>
          {demandas.map((demanda) => (
            <Grid item xs={12} key={demanda.tipo}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {demanda.titulo}
                </Typography>
                <Typography variant="body2" paragraph>
                  {demanda.descricao}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
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