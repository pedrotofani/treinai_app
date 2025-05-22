import React from 'react';
import { Container, IconButton, PlusButton, IconText } from './style';
import Icon from 'react-native-vector-icons/Feather';

export default function Footer() {
  return (
    <Container>
      <IconButton>
        <Icon name="home" size={24} color="#B71C1C" />
        <IconText>Home</IconText>
      </IconButton>

      <IconButton>
        <Icon name="bar-chart-2" size={24} color="#B71C1C" />
        <IconText>Stats</IconText>
      </IconButton>

      <PlusButton>
        <Icon name="plus" size={32} color="#fff" />
      </PlusButton>

      <IconButton>
        <Icon name="users" size={24} color="#B71C1C" />
        <IconText>Usuários</IconText>
      </IconButton>

      <IconButton>
        <Icon name="settings" size={24} color="#B71C1C" />
        <IconText>Config</IconText>
      </IconButton>
    </Container>
  );
}
