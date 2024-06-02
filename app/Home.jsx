import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

// Sample data for cards
const cards = [
  {
    title: 'Adventures',
    description: 'This is the description for card 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Tour Safaris',
    description: 'This is the description for card 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Parks',
    description: 'This is the description for card 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Beach Sports',
    description: 'This is the description for card 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Boat Riding',
    description: 'This is the description for card 2',
    image: 'https://via.placeholder.com/150',
  },
  // Add more cards as needed
];

const Card = ({ title, description, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>ToursBoat Adventures</Text>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#444',
  },
});

export default Home;
