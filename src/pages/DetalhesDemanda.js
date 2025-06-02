import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Button,
  Divider,
  Collapse,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Footer from '../components/Footer';

function DetalhesDemanda() {
  const { tipo } = useParams();
  const [expandedItems, setExpandedItems] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Dados de exemplo - você deve substituir com dados reais
  const locais = [
        {
            "id": 1,
            "nome": "1º CEJUSC DA CAPITAL (Varas de Família)",
            "endereco": "Fórum Cível da Capital - 1º andar",
            "telefone": "+5591993449956",
            "telefone_str": "(91) 3205-2839 / (91) 3205-2840 / (91) 99344-9956",
            "email": "cejuscvaradefamiliabelem@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dr. Francisco Roberto Macêdo de Souza"
        },
        {
            "id": 2,
            "nome": "2º CEJUSC DA CAPITAL (Casa de Justiça e Cidadania)",
            "endereco": "Avenida Rômulo Maiorana, nº 1366, entre Mauriti e estrela, Bairro Marco",
            "telefone": "+5591991738979",
            "telefone_str": "(91) 3131-1604 / (91) 99173-8979",
            "email": "cejusc.cjc@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dra. Betânia Figueiredo Pessoa"
        },
        {
            "id": 3,
            "nome": "3º CEJUSC DA CAPITAL - CEJUSC EMPRESARIAL",
            "endereco": "Fórum Cível da Capital - 3º andar (anexo)",
            "telefone": "+5591983282628",
            "telefone_str": "(91) 3205-2820 / (91) 98328-2628",
            "email": "cejusc.empresarial@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "empresarial",
            "coordenador": "Célio Petrônio D´ Anunciação"
        },
        {
            "id": 4,
            "nome": "4º CEJUSC DA CAPITAL - UNIFAMAZ",
            "endereco": "Av. Quintino Bocaiuva s/n, Bairro Reduto (entre Rua Municipalidade e Rua Belém)",
            "telefone": "+5591989500152",
            "telefone_str": "(91) 98950-0152",
            "email": "4cejusc@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta de 8h às 18h",
            "competencia": "geral",
            "coordenador": "Dra. Ana Patrícia Nunes Alves Fernandez"
        },
        {
            "id": 5,
            "nome": "5º CEJUSC DA CAPITAL (CAD - Central de Atermação)",
            "endereco": "Avenida Pedro Miranda, nº 1593, 3º andar, Bairro Pedreira",
            "telefone": "",
            "telefone_str": "(91) 3110-7435",
            "email": "cejusc.cad@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 12h",
            "competencia": "geral",
            "coordenador": "Dr. Acrísio Tarja de Figueiredo"
        },
        {
            "id": 6,
            "nome": "6º CEJUSC DA CAPITAL (SAÚDE)",
            "endereco": "Av. Conselheiro Furtado, nº 616, Bairro Batista Campos",
            "telefone": "+5591981579222",
            "telefone_str": "(91) 98157-9222",
            "email": "6cejusc.saude@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta de 8h às 14h",
            "competencia": "saude",
            "coordenador": "Dra. Kátia Parente Sena"
        },
        {
            "id": 7,
            "nome": "7º CEJUSC DA CAPITAL (UFPA)",
            "endereco": "Rua Augusto Correa, nº 1, NPJ da UFPA, Bloco L - Campus Profissional, Bairro Guamá",
            "telefone": "+5591993431022",
            "telefone_str": "(91) 99343-1022",
            "email": "cejusc.ufpa@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dr. Agenor Cássio Nascimento Correia de Andrade"
        },
        {
            "id": 8,
            "nome": "1º CEJUSC DE ANANINDEUA",
            "endereco": "Fórum de Ananindeua - Av. Cláudio Sanders, nº 193, Centro - Ananindeua",
            "telefone": "+5591993006706, +5591992566016",
            "telefone_str": "Atendimento Processual: (91) 99300-6706 / (91) 3201-4957, Atendimento Pré-processual: (91) 99256-6016",
            "email": "1cejusc.ananindeua@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dr. Carlos Márcio de Melo Queiroz"
        },
        {
            "id": 9,
            "nome": "1º CEJUSC DE MARITUBA",
            "endereco": "Fórum de Marituba - R. Cláudio Barbosa da Silva, 536 - Boa Vista",
            "telefone": "",
            "telefone_str": "(91) 3292-0730",
            "email": "cejuscmarituba@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dra. Maria de Fátima Alves"
        },
        {
            "id": 10,
            "nome": "1º CEJUSC DE CASTANHAL",
            "endereco": "Faculdade Estácio - Rod. BR 316 km 60, S/N - Apeú - Castanhal-PA",
            "telefone": "+5591989500065",
            "telefone_str": "(91) 98950-0065",
            "email": "",
            "funcionamento": "Segunda à Sexta de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dra. Ana Loise Ramos dos Santos"
        },
        {
            "id": 11,
            "nome": "1º CEJUSC DE ABAETETUBA",
            "endereco": "Fórum Juiz Hugo Oscar Figueira de Mendonça, Av. D. Pedro II, 1177, Bairro Aviação, CEP 68.440-000",
            "telefone": "+5591980100919",
            "telefone_str": "(91) 98010-0919",
            "email": "cejuscabaetetuba@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 08h às 14h",
            "competencia": "geral",
            "coordenador": "Dr. Fernanda Lucena"
        },
        {
            "id": 12,
            "nome": "1º CEJUSC DE ALTAMIRA",
            "endereco": "Fórum Des. José Amazonas Pantoja - Av. Brigadeiro Eduardo Gomes, nº 1651, Bairro São Sebastião, CEP 68.372-020",
            "telefone": "",
            "telefone_str": "",
            "email": "",
            "funcionamento": "Segunda à Sexta-feira de 08h às 14h",
            "competencia": "geral",
            "coordenador": "Dra. Luanna Karissa Araújo Lopes"
        },
        {
            "id": 13,
            "nome": "1º CEJUSC DE MARABÁ",
            "endereco": "Fórum Juiz José Elias Monteiro Lopes - Rodovia Transamazônica, S/N, Bairro Amapá, Marabá-PA, CEP 68.502-290",
            "telefone": "+5594991267914",
            "telefone_str": "(94) 99126-7914",
            "email": "cejuscmaraba@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 12h às 18h",
            "competencia": "geral",
            "coordenador": "Dra. Adriana Divina da Costa Tristão"
        },
        {
            "id": 14,
            "nome": "1º CEJUSC DE PARAGOMINAS",
            "endereco": "Prédio Anexo ao Fórum Dr. Célio de Rezende Miranda, Rua Ilhéus, s/n, Bairro Industrial",
            "telefone": "+5591991805107",
            "telefone_str": "(91) 99180-5107 / (91) 3729-9700 ramal 9716",
            "email": "cejuscparagominas@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dr. Wander Luis Bernardo"
        },
        {
            "id": 15,
            "nome": "1º CEJUSC DE PARAUAPEBAS",
            "endereco": "Fórum Juiz Célio Rodrigues Cal - Rua C, Quadra Especial, S/N, Bairro Cidade Nova, CEP 68.515-000",
            "telefone": "",
            "telefone_str": "(94) 3327-9633",
            "email": "cejuscparauapebas@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dra. Eline Salgado Vieira"
        },
        {
            "id": 16,
            "nome": "1º CEJUSC DE REDENÇÃO",
            "endereco": "Fórum da Comarca de Redenção, Rua Pedro Coelho de Camargo, s/n, Quadra 22, Setor Parque dos Buritis, Redenção/PA",
            "telefone": "+5591980100849",
            "telefone_str": "(91) 98010-0849",
            "email": "cejuscredencao@tjpa.jus.br",
            "funcionamento": "Segunda à sexta-feira de 11h00 às 17h00",
            "competencia": "geral",
            "coordenador": "Dra. Leonila Maria de Melo Medeiros"
        },
        {
            "id": 17,
            "nome": "1º CEJUSC DE SANTARÉM",
            "endereco": "Fórum Des. Ernesto Adolfo Chaves, Avenida Mendonça Furtado, S/N, Bairro Liberdade, CEP 68.005-100",
            "telefone": "+5591991563161",
            "telefone_str": "(93) 3064-9217 / (91) 99156-3161 (whatsapp)",
            "email": "cejuscsantarem@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dr. Roberto Rodrigues Brito Júnior"
        },
        {
            "id": 18,
            "nome": "1º CEJUSC DE TUCURUÍ",
            "endereco": "Av. Trinta e Um de Março nº 102 - Bairro Santa Isabel",
            "telefone": "+5591983282707",
            "telefone_str": "(91) 98328-2707",
            "email": "cejusc.tucurui@tjpa.jus.br",
            "funcionamento": "Segunda à sexta-feira de 08h00 às 14h00",
            "competencia": "geral",
            "coordenador": "Dr. Rafael da Silva Maia"
        }
    ];

  const getTipoDemanda = () => {
    switch (tipo) {
      case 'geral':
        return 'Demandas em Geral';
      case 'empresarial':
        return 'Demandas Empresariais';
      case 'saude':
        return 'Demandas de Saúde Pública';
      default:
        return 'Demanda';
    }
  };

  const handleToggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleWhatsApp = (telefone) => {
    const message = `Olá, eu estou em um conflito na ${getTipoDemanda()} e gostaria de auxílio.`;
    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Filtrar locais por competência
  const locaisFiltrados = locais.filter(local => local.competencia === tipo);

  return (
    <Container maxWidth="sm" sx={{ px: isMobile ? 1 : 2 }}>
      <Box sx={{ mt: isMobile ? 2 : 4, mb: isMobile ? 2 : 4 }}>
        <Typography variant={isMobile ? 'h5' : 'h4'} component="h1" gutterBottom align="center">
          {getTipoDemanda()}
        </Typography>

        <Paper elevation={3} sx={{ p: isMobile ? 2 : 3, mb: 3 }}>
          <Typography variant={isMobile ? 'subtitle1' : 'h6'} gutterBottom>
            Locais disponíveis:
          </Typography>
          <List>
            {locaisFiltrados.map((local) => (
              <React.Fragment key={local.id}>
                <ListItemButton onClick={() => handleToggleExpand(local.id)}>
                  <ListItemText primary={local.nome} sx={{ fontSize: isMobile ? '1rem' : '1.1rem' }} />
                  {expandedItems[local.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={expandedItems[local.id]} timeout="auto" unmountOnExit>
                  <Box sx={{ pl: 2, pr: 1, pt: 1, pb: 2 }}>
                    <List disablePadding>
                      <ListItem
                        button
                        component="a"
                        href={local.endereco 
                          ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local.endereco)}` 
                          : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        disabled={!local.endereco}
                      >
                        <ListItemText
                          primary="Endereço"
                          secondary={local.endereco || "Não disponível"}
                          secondaryTypographyProps={{ 
                            style: { 
                              color: !local.endereco ? "rgba(0, 0, 0, 0.38)" : "inherit",
                              fontSize: isMobile ? '0.95rem' : '1rem'
                            } 
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Telefone"
                          secondary={local.telefone_str || "Não disponível"}
                          secondaryTypographyProps={{ fontSize: isMobile ? '0.95rem' : '1rem' }}
                        />
                      </ListItem>
                      <Divider />
                      <ListItemButton 
                        disabled={!local.email}
                        onClick={() => local.email && (window.location.href = `mailto:${local.email}`)}
                      >
                        <ListItemText
                          primary="Email"
                          secondary={local.email || "Não disponível"}
                          secondaryTypographyProps={{ fontSize: isMobile ? '0.95rem' : '1rem' }}
                        />
                      </ListItemButton>
                      <Divider />
                      <ListItem>
                        <ListItemText
                          primary="Horário de Funcionamento"
                          secondary={local.funcionamento || "Não disponível"}
                          secondaryTypographyProps={{ fontSize: isMobile ? '0.95rem' : '1rem' }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Coordenador"
                          secondary={local.coordenador || "Não disponível"}
                          secondaryTypographyProps={{ fontSize: isMobile ? '0.95rem' : '1rem' }}
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={() => handleWhatsApp(local.telefone)}
                          sx={{ mt: 2, fontSize: isMobile ? '0.95rem' : '1rem' }}
                          disabled={!local.telefone}
                        >
                          {local.telefone
                            ? "Entrar em contato via WhatsApp"
                            : "WhatsApp não disponível"}
                        </Button>
                      </ListItem>
                    </List>
                  </Box>
                </Collapse>
                <Divider sx={{ my: 1 }} />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Box>
      <Footer/>
    </Container>
  );
}

export default DetalhesDemanda; 