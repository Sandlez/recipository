import React from 'react';
import { Pressable } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import Colors from '../config/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootTabScreenProps } from '../types';

export default function InfoRedirect({ navigation }: RootTabScreenProps<'TabOne'>) {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      onPress={() => navigation.navigate('Modal')}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}>
      <FontAwesome
        name="info-circle"
        size={25}
        color={Colors[colorScheme].text}
        style={{ marginRight: 15 }}
      />
    </Pressable>
  );
};

