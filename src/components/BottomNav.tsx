import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BottomNav: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>🏠</Text>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>📅</Text>
        <Text style={styles.navText}>Bookings</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>💬</Text>
        <Text style={styles.navText}>Chat</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>👤</Text>
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navText: {
    color: '#888',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default BottomNav;
