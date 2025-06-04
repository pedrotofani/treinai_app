import React, { useState } from 'react';
import {
  Container,
  Title,
  Input,
  Row,
  SmallInputWrapper,
  Label,
  Button,
  ButtonText
} from './style';

export default function AdicionarTreino() {
  const [nome, setNome] = useState('');
  const [data, setData] = useState(''); // Agora string simples
  const [hora, setHora] = useState('');
  const [objetivo, setObjetivo] = useState('');

  return (
    <Container>
      <Title>Adicione Nome do Treino:</Title>

      <Input
        placeholder="Treino de Perna..."
        value={nome}
        onChangeText={setNome}
      />

      <Row>
        <SmallInputWrapper>
          <Label>Data:</Label>
          <Input
            placeholder="DD/MM/AAAA"
            value={data}
            onChangeText={setData}
          />
        </SmallInputWrapper>

        <SmallInputWrapper>
          <Label>Hora:</Label>
          <Input
            placeholder="00:00"
            value={hora}
            onChangeText={setHora}
          />
        </SmallInputWrapper>

        <SmallInputWrapper>
          <Label>Objetivo:</Label>
          <Input
            placeholder="Hipertrofia"
            value={objetivo}
            onChangeText={setObjetivo}
          />
        </SmallInputWrapper>
      </Row>

      <Button>
        <ButtonText>Avançar</ButtonText>
      </Button>
    </Container>
  );
}
