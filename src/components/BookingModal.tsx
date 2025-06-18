import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

interface BookingModalProps {
  visible: boolean;
  onClose: () => void;
  onBookingConfirm: (booking: any) => void;
  service: {
    title: string;
    price: string;
    duration: string;
  };
}

const BookingModal: React.FC<BookingModalProps> = ({ visible, onClose, onBookingConfirm, service }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
  const dates = ['2025-06-19', '2025-06-20', '2025-06-21', '2025-06-22', '2025-06-23'];

  const handleConfirmBooking = () => {
    const booking = {
      service: service.title,
      date: new Date(selectedDate).toLocaleDateString('en', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: selectedTime,
      price: service.price,
      duration: service.duration,
      notes,
    };
    
    onBookingConfirm(booking);
    onClose();
  };

  const resetForm = () => {
    setSelectedDate('');
    setSelectedTime('');
    setNotes('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Book {service.title}</Text>
          <Text style={styles.price}>{service.price} • {service.duration}</Text>

          <Text style={styles.label}>Select Date:</Text>
          <View style={styles.optionsContainer}>
            {dates.map((date) => (
              <TouchableOpacity
                key={date}
                style={[styles.option, selectedDate === date && styles.selectedOption]}
                onPress={() => setSelectedDate(date)}
              >
                <Text style={[styles.optionText, selectedDate === date && styles.selectedText]}>
                  {new Date(date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Select Time:</Text>
          <View style={styles.optionsContainer}>
            {timeSlots.map((time) => (
              <TouchableOpacity
                key={time}
                style={[styles.option, selectedTime === time && styles.selectedOption]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={[styles.optionText, selectedTime === time && styles.selectedText]}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Additional Notes:</Text>
          <TextInput
            style={styles.textInput}
            value={notes}
            onChangeText={setNotes}
            placeholder="Brief description of your consultation needs..."
            placeholderTextColor="#666"
            multiline
          />

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.bookButton, (!selectedDate || !selectedTime) && styles.disabledButton]}
              disabled={!selectedDate || !selectedTime}
              onPress={handleConfirmBooking}
            >
              <Text style={styles.bookText}>Continue to Payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    maxWidth: 400,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  price: {
    color: '#00ff88',
    fontSize: 16,
    marginBottom: 24,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  option: {
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#00ff88',
  },
  optionText: {
    color: '#fff',
    fontSize: 14,
  },
  selectedText: {
    color: '#000',
    fontWeight: '600',
  },
  textInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    height: 80,
    textAlignVertical: 'top',
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  cancelButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#666',
    alignItems: 'center',
  },
  cancelText: {
    color: '#666',
    fontWeight: '600',
  },
  bookButton: {
    flex: 1,
    backgroundColor: '#00ff88',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#333',
  },
  bookText: {
    color: '#000',
    fontWeight: '700',
  },
});

export default BookingModal;
