import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [confessions, setConfessions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/confessions')
      .then(response => setConfessions(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={confessions}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Text>{item.content}</Text>}
      />
    </View>
  );
};

export default HomeScreen; 