import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const H2Logo: React.FC = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        })
      ).start();
    };
    startRotation();
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.h2Text}>H2</Text>
      <Animated.Text 
        style={[styles.plusIcon, { transform: [{ rotate: spin }] }]}
      >
        +
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  h2Text: {
    fontSize: 42,
    fontWeight: '800',
    color: '#00ff88',
    textShadowColor: '#00ff88',
    textShadowRadius: 20,
    textShadowOffset: { width: 0, height: 0 },
    letterSpacing: -2,
    marginRight: 8,
  },
  plusIcon: {
    fontSize: 36,
    fontWeight: '800',
    color: '#00ff88',
    textShadowColor: '#00ff88',
    textShadowRadius: 15,
    textShadowOffset: { width: 0, height: 0 },
  },
});

export default H2Logo;
