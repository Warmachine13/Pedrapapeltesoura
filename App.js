/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const play = (value) => {
    let robot = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    let itens = ['pedra', 'papel', 'tesoura']

    // let robotchoice = itens[robot]

    switch (true) {
      case value == robot:
        Alert.alert('Empate', `Suas Encolhas foram iguais ${itens[robot]}`)
        return 'empate'

      case ((value == 0) && (robot == 'tesoura')
        || (value == 1) && (robot == 0)) ||
        (value == 2) && (robot == 1):
        Alert.alert('Vitória', `Parabéns sua escolha foi ${itens[value]} contra ${itens[robot]}`)
        return 'vitoria'

      case ((value == 0) && (robot == 1) ||
        (value == 1) && (robot == 2) ||
        (value == 2) && (robot == 0)):
        Alert.alert('Derrota', `Que pena sua escolha foi ${itens[value]} contra ${itens[robot]}`)
        return 'derrota'

      default:
        break;
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, padding: 20 }}>Seja bem vindo ao jogo de pedra papel tesoura</Text>
            <Image style={{ alignSelf: 'center' }} source={require('./robot.jpg')} />
            <Text style={{ fontSize: 18, padding: 18, textAlign: 'center' }}>Teste sua sorte contra mim </Text>


            {/* <TouchableOpacity style={{ width: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 30 }}>Start</Text>
              </View>

            </TouchableOpacity> */}

            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-around', flex: 1 }}>

              <TouchableOpacity onPress={_ => play(0)}>
                <View>
                  <Image style={{ width: 120, height: 120 }} source={require('./stone.jpg')} />
                  <Text style={{ textAlign: 'center' }}>Pedra</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={_ => play(1)}>
                <View>
                  <Image style={{ width: 120, height: 120 }} source={require('./paper.jpg')} />
                  <Text style={{ textAlign: 'center' }}>Papel</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={_ => play(2)}>
                <View>
                  <Image style={{ width: 120, height: 120 }} source={require('./scissors.jpg')} />
                  <Text style={{ textAlign: 'center' }}>Tesoura</Text>
                </View>
              </TouchableOpacity>

            </View>
            {/* <TouchableOpacity>
        <View>
            
            </View>

        </TouchableOpacity>
        <TouchableOpacity>
        <View>
            
            </View>

        </TouchableOpacity> */}
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
