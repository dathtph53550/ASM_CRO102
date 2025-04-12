import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const favoriteItems = [
  {
    id: 1,
    name: 'Sprite Can',
    description: '325ml, Price',
    price: 1.50,
    image: require('../../assets/images/bananas.png'),
  },
  {
    id: 2,
    name: 'Diet Coke',
    description: '355ml, Price',
    price: 1.99,
    image: require('../../assets/images/bell-pepper.png'),
  },
  {
    id: 3,
    name: 'Apple & Grape Juice',
    description: '2L, Price',
    price: 15.50,
    image: require('../../assets/images/eggs.png'),
  },
  {
    id: 4,
    name: 'Coca Cola Can',
    description: '325ml, Price',
    price: 4.99,
    image: require('../../assets/images/fruits.png'),
  },
  {
    id: 5,
    name: 'Pepsi Can',
    description: '330ml, Price',
    price: 4.99,
    image: require('../../assets/images/oil.png'),
  },
];

const FavoritesScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <Feather name="chevron-right" size={20} color="gray" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favourite</Text>
      <FlatList
        data={favoriteItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add All To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    paddingVertical: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: 'gray',
    marginTop: 3,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  addToCartButton: {
    backgroundColor: '#53B175',
    paddingVertical: 18,
    marginHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 200,
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default FavoritesScreen;

