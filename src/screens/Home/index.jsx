import React from 'react';
import { Wrapper, Container, Title } from './style';
import Footer from '../../components/Footer';
import ImageCard from '../../components/ImageCard';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Title>Home com Imagem</Title>

        <ImageCard imageSource={require('../../../assets/treino-footer.jpg')} />
      </Container>

      <Footer />
    </Wrapper>
  );
}
