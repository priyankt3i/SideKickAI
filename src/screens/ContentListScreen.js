import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ContentListScreen = () => {
  const content = [
    { id: '1', title: 'First Item' },
    { id: '2', title: 'Second Item' },
  ];

  return (
    <View>
      <FlatList
        data={content}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default ContentListScreen;
