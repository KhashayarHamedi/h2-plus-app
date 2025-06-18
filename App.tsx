import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import H2Logo from './src/components/H2Logo';
import ConsultationCard from './src/components/ConsultationCard';
import Header from './src/components/Header';
import BottomNav from './src/components/BottomNav';
import BookingModal from './src/components/BookingModal';
import PaymentModal from './src/components/PaymentModal';
import SuccessModal from './src/components/SuccessModal';

export default function App() {
  const [bookingModalVisible, setBookingModalVisible] = useState(false);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState({
    title: '',
    price: '',
    duration: '',
  });
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    price: '',
  });

  const handleBookPress = (title: string, price: string, duration: string) => {
    setSelectedService({ title, price, duration });
    setBookingModalVisible(true);
  };

  const handleBookingConfirm = (booking: any) => {
    setBookingData(booking);
    setPaymentModalVisible(true);
  };

  const handlePaymentSuccess = () => {
    setSuccessModalVisible(true);
  };

  const handleSuccessClose = () => {
    setSuccessModalVisible(false);
    // Reset all booking data
    setBookingData({ service: '', date: '', time: '', price: '' });
    setSelectedService({ title: '', price: '', duration: '' });
  };

  const handlePaymentClose = () => {
    setPaymentModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
      
      <Header />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.logoSection}>
          <H2Logo />
        </View>

        <View style={styles.servicesSection}>
          <ConsultationCard
            title="Business Strategy"
            description="Get expert advice on business planning, market analysis, and growth strategies"
            price="€150/hr"
            duration="60 min"
            category="BUSINESS"
            onBookPress={() => handleBookPress("Business Strategy", "€150/hr", "60 min")}
          />

          <ConsultationCard
            title="Media Production"
            description="Professional consultation for video, audio, and digital content creation"
            price="€120/hr"
            duration="45 min"
            category="MEDIA"
            onBookPress={() => handleBookPress("Media Production", "€120/hr", "45 min")}
          />

          <ConsultationCard
            title="Marketing & Branding"
            description="Strategic marketing solutions and brand development consultation"
            price="€130/hr"
            duration="60 min"
            category="MARKETING"
            onBookPress={() => handleBookPress("Marketing & Branding", "€130/hr", "60 min")}
          />

          <ConsultationCard
            title="Technical Support"
            description="Expert technical consultation for software and system solutions"
            price="€100/hr"
            duration="30 min"
            category="TECH"
            onBookPress={() => handleBookPress("Technical Support", "€100/hr", "30 min")}
          />
        </View>
      </ScrollView>
      
      <BottomNav />
      
      <BookingModal
        visible={bookingModalVisible}
        onClose={() => setBookingModalVisible(false)}
        onBookingConfirm={handleBookingConfirm}
        service={selectedService}
      />
      
      <PaymentModal
        visible={paymentModalVisible}
        onClose={handlePaymentClose}
        onPaymentSuccess={handlePaymentSuccess}
        booking={bookingData}
      />

      <SuccessModal
        visible={successModalVisible}
        onClose={handleSuccessClose}
        booking={bookingData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  scrollView: {
    flex: 1,
  },
  logoSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  servicesSection: {
    paddingBottom: 20,
  },
});
