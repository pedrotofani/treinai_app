import styled from 'styled-components/native';

// Pai geral que deixa espaço pro footer fixo
export const Wrapper = styled.View`
  flex: 1;
  position: relative;
  background-color: #fff;
`;

// Container com conteúdo da tela
export const Container = styled.View`
  flex: 1;
  padding: 16px;
align-items: center;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #e53935;
`;

export const ContainerButton = styled.View`
  flex: 1;
  flex-direction: row;
`;