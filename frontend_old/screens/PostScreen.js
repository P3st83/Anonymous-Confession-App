import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const PostScreen = () => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:3000/api/confessions', { content })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <View>
      <TextInput
        placeholder="Write your confession..."
        value={content}
        onChangeText={setContent}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default PostScreen; 