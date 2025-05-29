import React from 'react';
import { Container, ButtonText, IconWrapper } from './style';
import Icon from 'react-native-vector-icons/Feather';

export default function ActionButton({ iconName, text, onPress }) {
  return (
    <Container onPress={onPress}>
      <IconWrapper>
        <Icon name={iconName} size={18} color="#E53935" />
      </IconWrapper>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
