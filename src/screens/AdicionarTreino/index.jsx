import React, { useState } from 'react';
import { Modal } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Container,
  Title,
  Input,
  Row,
  SmallInputWrapper,
  Label,
  Button,
  ButtonText,
  PickerButton,
  PickerButtonText,
  ModalContainer,
  ModalContent,
  Option,
  OptionText,
  CancelButton,
  CancelButtonText
} from './style';

export default function AdicionarTreino() {
  const [nome, setNome] = useState('');
  const [data, setData] = useState(null);
  const [hora, setHora] = useState(null);
  const [objetivo, setObjetivo] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isObjectivePickerVisible, setObjectivePickerVisible] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirmDate = (pickedDate) => {
    setData(pickedDate);
    hideDatePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);
  const handleConfirmTime = (pickedTime) => {
    setHora(pickedTime);
    hideTimePicker();
  };

  const openObjectivePicker = () => setObjectivePickerVisible(true);
  const closeObjectivePicker = () => setObjectivePickerVisible(false);
  const selectObjective = (option) => {
    setObjetivo(option);
    closeObjectivePicker();
  };

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
          <PickerButton onPress={showDatePicker}>
            <PickerButtonText placeholder={!data}>
              {data ? data.toLocaleDateString('pt-BR') : 'DD/MM/AAAA'}
            </PickerButtonText>
          </PickerButton>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
          />
        </SmallInputWrapper>

        <SmallInputWrapper>
          <Label>Hora:</Label>
          <PickerButton onPress={showTimePicker}>
            <PickerButtonText placeholder={!hora}>
              {hora
                ? hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
                : '00:00'}
            </PickerButtonText>
          </PickerButton>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
          />
        </SmallInputWrapper>

        <SmallInputWrapper>
          <Label>Objetivo:</Label>
          <PickerButton onPress={openObjectivePicker}>
            <PickerButtonText placeholder={!objetivo}>
              {objetivo || 'Selecione'}
            </PickerButtonText>
          </PickerButton>
          <Modal visible={isObjectivePickerVisible} transparent animationType="fade">
            <ModalContainer>
              <ModalContent>
                {['Hipertrofia', 'Resistência', 'Emagrecimento', 'Flexibilidade'].map((op) => (
                  <Option key={op} onPress={() => selectObjective(op)}>
                    <OptionText>{op}</OptionText>
                  </Option>
                ))}
                <CancelButton onPress={closeObjectivePicker}>
                  <CancelButtonText>Cancelar</CancelButtonText>
                </CancelButton>
              </ModalContent>
            </ModalContainer>
          </Modal>
        </SmallInputWrapper>
      </Row>

      <Button>
        <ButtonText>Avançar</ButtonText>
      </Button>
    </Container>
  );
}
