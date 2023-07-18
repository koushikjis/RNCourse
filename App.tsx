import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal!"></TextInput>
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 16,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle:'solid',
    borderColor:'red',
    borderWidth:2
  },
});
