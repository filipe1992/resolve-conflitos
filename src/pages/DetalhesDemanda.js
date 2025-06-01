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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
} from '@mui/material';
import Footer from '../components/Footer';

function DetalhesDemanda() {
  const { tipo } = useParams();
  const [selectedLocation, setSelectedLocation] = useState('');

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
        },
        {
            "id": 19,
            "nome": "1º CEJUSC DE ABAETETUBA (interior)",
            "endereco": "Fórum Juiz Hugo Oscar Figueira de Mendonça, Av. D. Pedro II, 1177, Bairro Aviação, CEP 68.440-000",
            "telefone": "+5591980100919",
            "telefone_str": "(91) 98010-0919",
            "email": "cejuscabaetetuba@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 08h às 14h",
            "competencia": "geral",
            "coordenador": "Dr. Adriano Farias Fernandes"
        },
        {
            "id": 20,
            "nome": "1º CEJUSC DE MARABÁ (interior)",
            "endereco": "Fórum Juiz José Elias Monteiro Lopes - Rodovia Transamazônica, S/N, Bairro Amapá, Marabá-PA, CEP 68.502-290",
            "telefone": "+5594991267914",
            "telefone_str": "(94) 99126-7914",
            "email": "cejuscmaraba@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 12h às 18h",
            "competencia": "geral",
            "coordenador": "Dra. Adriana Divina da Costa Tristão"
        },
        {
            "id": 21,
            "nome": "1º CEJUSC DE PARAGOMINAS (interior)",
            "endereco": "Fórum Dr. Célio de Rezende Miranda - Rua Ilhéus, S/N, Bairro Industrial",
            "telefone": "+5591991805107",
            "telefone_str": "(91) 99180-5107 / (91) 3729-9700 ramal 9716",
            "email": "cejuscparagominas@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dr. Wander Luis Bernardo"
        },
        {
            "id": 22,
            "nome": "1º CEJUSC DE PARAUAPEBAS (interior)",
            "endereco": "Fórum Juiz Célio Rodrigues Cal - Rua C, Quadra Especial, S/N, Bairro Cidade Nova, CEP 68.515-000",
            "telefone": "",
            "telefone_str": "(94) 3327-9633",
            "email": "cejuscparauapebas@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dra. Eline Salgado Vieira"
        },
        {
            "id": 23,
            "nome": "1º CEJUSC DE REDENÇÃO (interior)",
            "endereco": "Fórum da Comarca de Redenção, Rua Pedro Coelho de Camargo, s/n, Quadra 22, Setor Parque dos Buritis, Redenção/PA",
            "telefone": "+5591980100849",
            "telefone_str": "(91) 98010-0849",
            "email": "cejuscredencao@tjpa.jus.br",
            "funcionamento": "Segunda à sexta-feira de 11h00 às 17h00",
            "competencia": "geral",
            "coordenador": "Dra. Leonila Maria de Melo Medeiros"
        },
        {
            "id": 24,
            "nome": "1º CEJUSC DE SANTARÉM (interior)",
            "endereco": "Fórum Des. Ernesto Adolfo Chaves, Avenida Mendonça Furtado, S/N, Bairro Liberdade, CEP 68.005-100",
            "telefone": "+5591991563161",
            "telefone_str": "(93) 3064-9217 / (91) 99156-3161 (whatsapp)",
            "email": "cejuscsantarem@tjpa.jus.br",
            "funcionamento": "Segunda à Sexta-feira de 8h às 14h",
            "competencia": "geral",
            "coordenador": "Dr. Roberto Rodrigues Brito Júnior"
        },
        {
            "id": 25,
            "nome": "1º CEJUSC DE TUCURUÍ (interior)",
            "endereco": "Rua Gamamiel, s/n, Bairro Jardim Marilucy, CEP 68459-490",
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

  const handleWhatsApp = () => {
    const location = locais.find(loc => loc.id === selectedLocation);
    if (location) {
      const message = `Olá, eu estou em um conflito na ${getTipoDemanda()} e gostaria de auxílio.`;
      const whatsappUrl = `https://wa.me/${location.telefone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  // Filtrar locais por competência
  const locaisFiltrados = locais.filter(local => local.competencia === tipo);
const selectedLocal = locais.find(loc => loc.id === selectedLocation);
const email = selectedLocal?.email;
  const hasWhatsapp = selectedLocal?.telefone;
const hasEndereco = selectedLocal?.endereco;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          {getTipoDemanda()}
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Selecione um local</InputLabel>
            <Select
              value={selectedLocation}
              label="Selecione um local"
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locaisFiltrados.map((local) => (
                <MenuItem key={local.id} value={local.id}>
                  {local.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedLocation && (
            <Box>
              <List>
                <ListItem
  button // Transforma em botão clicável
  component="a" // Usa elemento de âncora (<a>)
  href={selectedLocation 
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hasEndereco || '')}` 
    : '#'
  }
  target="_blank" // Abre em nova aba
  rel="noopener noreferrer" // Segurança para nova aba
  disabled={!hasEndereco} // Desativa se não houver local
>
  <ListItemText
    primary="Endereço"
    secondary={hasEndereco || "Nenhum local selecionado"}
    secondaryTypographyProps={{ 
      component: "span", // Mantém estilo consistente
      style: { 
        color: !hasEndereco ? "rgba(0, 0, 0, 0.38)" : "inherit" // Cor de desabilitado
      } 
    }}
  />
</ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Telefone"
                    secondary={locais.find(loc => loc.id === selectedLocation)?.telefone_str}
                  />
                </ListItem>
                <Divider />
<ListItemButton 
  disabled={!email}
  onClick={() => email && (window.location.href = `mailto:${email}`)}
>
  <ListItemText
    primary="Email"
    secondary={email || "Não disponível"}
  />
</ListItemButton>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Horário de Funcionamento"
                    secondary={locais.find(loc => loc.id === selectedLocation)?.funcionamento}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Coordenador"
                    secondary={locais.find(loc => loc.id === selectedLocation)?.coordenador}
                  />
                </ListItem>
              </List>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleWhatsApp}
                sx={{ mt: 2 }}
                disabled={!hasWhatsapp}
              >
                {hasWhatsapp
? "Entrar em contato via WhatsApp"
: "Não possui whatsapp disponível para contato."}
              </Button>
            </Box>
          )}
        </Paper>
      </Box>
      <Footer/>
    </Container>
  );
}

export default DetalhesDemanda; 