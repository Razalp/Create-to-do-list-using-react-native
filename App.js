import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
{/* todotask */}
   <View style={styles.taskWrapped}>
    <Text style={styles.titleSecction}>To-do-list</Text>
    <View style={styles.item}>

    </View>
   </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
  taskWrapped:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  titleSecction:{
    fontSize:24,
    fontWeight:"bold",
  },
  item:{

  },
});
