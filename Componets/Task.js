import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, TouchableWithoutFeedback, TextInput,Button } from 'react-native';

const Task = ({ id, text, onDelete, onEdit }) => {
  const [pressStartTime, setPressStartTime] = useState(0);
  const longPressDuration = 1000; 
  const pressTimerRef = useRef(null);
  const [editedText, setEditedText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);

  const handlePressIn = () => {
    pressTimerRef.current = setTimeout(() => {
      setPressStartTime(0);
      showAlert(); 
    }, longPressDuration);
    setPressStartTime(Date.now());
  };

  const handlePressOut = () => {
    clearTimeout(pressTimerRef.current);
    setPressStartTime(0);
  };

  const handleEditPress = () => {
    setIsEditing(true);
  };


  const handleEditSave = () => {
    onEdit(id, editedText);
    setIsEditing(false);
  };

  const showAlert = () => {
    Alert.alert(
      'Task Options',
      'Choose an action:',
      [
        { text: 'Edit', onPress: handleEditPress },
        { text: 'Delete', onPress: onDelete, style: 'destructive' }
      ],
 
    );
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={styles.item}>
        {isEditing ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.editInput}
              value={editedText}
              onChangeText={setEditedText}
            />
            <TouchableOpacity onPress={handleEditSave}>
              <Text style={styles.editButton}>Save</Text>
            </TouchableOpacity>

          </View>
        ) : (
          <>
            <View style={styles.itemLeft}>
              <View style={styles.square}></View>
              <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FC4100",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#FFC55A",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    color: "#fff",
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderColor: "#000",
    borderWidth: 2,
  },
});

export default Task;