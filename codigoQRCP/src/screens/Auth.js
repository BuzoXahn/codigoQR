import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import React, {useState} from 'react';
import { layoutStyle } from '../styles';
import logo from '../../src/assets/leaves.jpg';
import RegisterForm from '../components/Auth/RegisterForm';

export default function Auth() {
    const [showLogin, setShowLogin] = useState(false);
    const changeForm =() => setShowLogin(!showLogin);
  return (

    <View style={layoutStyle.container}>
      <ImageBackground style={styles.background} source={logo}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {showLogin ? <Text>FormLogin</Text>:<RegisterForm changeForm = {changeForm}/>}
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
