import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';


const Home: React.FC = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.text} testID="text">
        You just fake logged in
      </Text>
    </View>
  );
};

export default Home;
