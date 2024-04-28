import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Task from './Componets/Task';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() === '') {
      return;
    }
    setTasks([...tasks, { id: tasks.length + 1, text: taskText }]);
    setTaskText('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text  style={styles.titleSection}>To-do List</Text>
        <ScrollView style={styles.scrollView}>
          <View style={styles.taskList}>
            {tasks.map(task => (
              <Task key={task.id} id={task.id} text={task.text} onDelete={() => deleteTask(task.id)} onEdit={editTask} />
            ))}
          </View>
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          onChangeText={text => setTaskText(text)}
          value={taskText}
        />
        <TouchableOpacity onPress={addTask}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  titleSection: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FC4100",
    marginBottom: 20,
  },
  taskList: {
    marginTop: 10,
  },
  scrollView: {
    marginBottom: 20, 
  },
  inputContainer: {
    position: "absolute",
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addButtonText: {
    fontSize: 24,
  },
});
