import React, { useCallback, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  const fakeLogin = useCallback(() => {
    navigation.navigate("Home")
  }, [navigation])

  const nameInvalid = useMemo(() => {
    return name.length == 0
  }, [name])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        autoCapitalize="none"
        onChangeText={text => setName(text)}
      />
      <TouchableOpacity onPress={fakeLogin} style={nameInvalid ? styles.disabledButton : styles.button} disabled={nameInvalid}>
        <Text style={styles.textButton}>Fake Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
