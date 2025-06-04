import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #f2f2f2;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #e53935;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #444;
  margin-bottom: 4px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ccc;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const SmallInputWrapper = styled.View`
  flex: 1;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.TouchableOpacity`
  background-color: #e53935;
  padding: 12px;
  margin-top: 24px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
