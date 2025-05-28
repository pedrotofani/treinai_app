import React from 'react';
import { Wrapper, Container, Title } from './style';
import Footer from '../../components/Footer';
import ImageCard from '../../components/ImageCard';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Wrapper>
      <Header username="Pedro" />
      
      <Container>
        <ImageCard imageSource={require('../../../assets/treino-footer.jpg')} />
      </Container>

      <Footer />
    </Wrapper>
  );
}
