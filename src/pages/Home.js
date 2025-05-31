import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
} from '@mui/material';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            CEJUSC
          </Typography>
          <Typography variant="h6" gutterBottom>
            Centro Judiciário de Solução de Conflitos e Cidadania
          </Typography>
          <Typography variant="body1" paragraph>
            O CEJUSC é um órgão especializado do Poder Judiciário que visa promover a solução consensual de conflitos, 
            contribuindo para a pacificação social e o acesso à justiça.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/demandas')}
            sx={{ mt: 2 }}
          >
            Como o CEJUSC pode me ajudar?
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default Home; 