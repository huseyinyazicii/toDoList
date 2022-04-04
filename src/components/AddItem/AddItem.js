import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './AddItem.style';

const AddItem = ({addItem, setContent,content}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={(text) => setContent(text)} value={content} placeholder="Ekle.." placeholderTextColor="#808080"  />
      <TouchableOpacity 
        style={content.length > 2 ? styles.button_on : styles.button} 
        onPress={content.length > 2 ? addItem : null}>
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;