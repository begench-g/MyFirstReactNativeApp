import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import ListScreen from './ListScreen';
const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Fist React Native app</Text>
      <Button 
        onPress={()=>props.navigation.navigate("List")}
        title="Go to Components Demo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize:20,
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize:20,
  },
});

export default HomeScreen;