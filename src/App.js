import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import styles from './App.style';

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [content, setContent] = useState("");

  const addItem = () => {
    const newItem = {id:toDoList.length, content:content, isComplete: false};
    setToDoList([...toDoList, newItem]);
    setContent("");
  };
  
  const changeIsComplete = (id) => {
    const newList = toDoList.map(item => item.id === id ? {...item, isComplete: !item.isComplete} : item);
    setToDoList(newList);
  }

  const deleteItem = (id) => {
    const newList = toDoList.filter(item => item.id !== id);
    setToDoList(newList);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>{toDoList.filter(item => !item.isComplete).length}</Text>
      </View>
      <ScrollView>
        { toDoList.map((item) => <ListItem item={item} key={item.id} changeIsComplete={changeIsComplete} deleteItem={deleteItem} />) }
      </ScrollView>
      <AddItem addItem={addItem} setContent={setContent} content={content} />
    </View>
  );
};

export default App;