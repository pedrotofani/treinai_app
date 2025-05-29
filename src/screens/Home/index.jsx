import React from 'react';
import { Wrapper, Container, Title, ContainerButton } from './style';
import Footer from '../../components/Footer';
import ImageCard from '../../components/ImageCard';
import Header from '../../components/Header';
import ActionButton from '../../components/ActionButton';
import { useNavigation } from '@react-navigation/native';



export default function Home() {

const navigation = useNavigation();


  return (
    <Wrapper>
      <Header username="Pedro" />      
      <Container>
        <ContainerButton>
            <ActionButton
            iconName="plus-circle"
            text="Adicionar Treino"
            onPress={() => navigation.navigate('AdicionarTreino')}
          />
          <ActionButton
            iconName="calendar"
            text="Ver Calendário"
            onPress={() => console.log('Ver calendário')}
          />
        </ContainerButton>
               
        <ImageCard imageSource={require('../../../assets/treino-footer.jpg')} />
      </Container>

      <Footer />
    </Wrapper>
  );
}
