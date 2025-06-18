import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ConsultationCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  onBookPress: () => void;
}

const ConsultationCard: React.FC<ConsultationCardProps> = ({
  title,
  description,
  price,
  duration,
  category,
  onBookPress,
}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.categoryBadge}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.details}>
        <Text style={styles.duration}>{duration}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <TouchableOpacity style={styles.bookButton} onPress={onBookPress}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#333',
    shadowColor: '#00ff88',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  categoryBadge: {
    backgroundColor: '#00ff88',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  categoryText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    color: '#aaaaaa',
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  duration: {
    color: '#888',
    fontSize: 14,
  },
  price: {
    color: '#00ff88',
    fontSize: 18,
    fontWeight: '700',
  },
  bookButton: {
    backgroundColor: '#00ff88',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ConsultationCard;
