import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './ListItem.style';

const ListItem = ({item, changeIsComplete, deleteItem}) => {
  return (
    <TouchableOpacity 
      style={item.isComplete ? styles.container_true : styles.container_false} 
      onPress={() => changeIsComplete(item.id)}
      onLongPress={() => deleteItem(item.id)}>
      <Text style={item.isComplete ? styles.text_true : styles.text_false}>
        {item.content}
      </Text>
    </TouchableOpacity>
  );
};

export default ListItem;