import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 2px solid #E53935;
  border-radius: 12px;
  padding: 10px 16px;
  margin: 8px;
  background-color: #fff;
  height: 40px;
`;

export const IconWrapper = styled.View`
  margin-right: 8px;
`;

export const ButtonText = styled.Text`
  color: #E53935;
  font-size: 14px;
  font-weight: bold;
`;
