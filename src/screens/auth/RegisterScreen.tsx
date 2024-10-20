import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigation = useNavigation<any>();

  const handleRegister = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;

      await firestore().collection('users').doc(user.uid).set({
        username: username,
        email: email,
      });

      navigation.navigate('LoginByNameScreen');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../resources/images/login-background.png')}
        style={styles.imageBackground}
        resizeMode="cover">
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Please sign up to get started</Text>
      </ImageBackground>

      <View style={styles.whiteContainer}>
        <Text style={styles.inputLabel}>NAME</Text>
        <TextInput
          style={styles.input}
          placeholder="John doe"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor="#A0A0A0"
        />
        <Text style={styles.inputLabel}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#A0A0A0"
        />
        <Text style={styles.inputLabel}>PASSWORD</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            placeholderTextColor="#A0A0A0"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.inputLabel}>RE-TYPE PASSWORD</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Re-type Password"
            secureTextEntry
            autoCapitalize="none"
            placeholderTextColor="#A0A0A0"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121126',
  },
  imageBackground: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  whiteContainer: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 24,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F5FA',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
  },
  inputLabel: {
    marginBottom: 8,
    color: '#32343E',
    fontSize: 13,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    paddingBottom: 16,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  button: {
    width: '100%',
    backgroundColor: '#FF6F00',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RegisterScreen;
