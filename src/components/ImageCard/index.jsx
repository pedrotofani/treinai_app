// src/components/ImageCard/index.jsx
import React from 'react';
import { Container, CardImage } from './style';
import { ImageBackground } from 'react-native';

export default function ImageCard({ imageSource }) {
  return (
    <Container>
      <ImageBackground
        source={imageSource}
        resizeMode="cover"
        style={{ width: '100%', height: '100%', justifyContent: 'flex-start' }}
        imageStyle={{ alignSelf: 'flex-start' }} // foca no topo
      >
      </ImageBackground>
    </Container>
  );
}
