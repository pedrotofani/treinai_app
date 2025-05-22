import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #ddd;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const IconButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const PlusButton = styled.TouchableOpacity`
  background-color: #E53935;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  elevation: 5;
`;

export const IconText = styled.Text`
  font-size: 10px;
  color: #B71C1C;
  margin-top: 2px;
`;
