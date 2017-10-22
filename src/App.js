import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import AngularJeopardy from './AngularJeopardy';
import VueJeopardy from './VueJeopardy';
import ReactJeopardy from './ReactJeopardy';

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  margin: 40px;
`;

const TextStyled = styled.Text`
  fontSize: 20;
  textAlign: center;
  margin: 10px;
  color: blue;
`;

export default App = () => (
  <Container>
    <TextStyled>
      Welcome to JavaScript Jeopardy!
    </TextStyled>
  </Container>
);

export const mainNavigator = TabNavigator({
  Home: { 
    screen: App,
    path: ''
  },
  Angular: {
    screen: AngularJeopardy,
    path: 'angular'
  },
  React: {
    screen: ReactJeopardy,
    path: 'react'
  },
  Vue: {
    screen: VueJeopardy,
    path: 'vue'
  }
});

App.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/js.png')}/>
  )
}

