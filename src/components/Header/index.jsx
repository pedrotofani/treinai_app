import React from 'react';
import { Background, Overlay, LogoText, Greeting } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';

export default function Header({ username = "Usuário" }) {
  return (

        <ImageBackground
            source={require('../../../assets/headerImage.jpg')}
            resizeMode="cover"
            style={{ width: '100%', height: 180 }}
        >
            <Overlay>
            <LogoText>treinaí</LogoText>
            <Greeting>Olá, Pedro... Vamos treinar?!</Greeting>
            </Overlay>
        </ImageBackground>
    

  );
}