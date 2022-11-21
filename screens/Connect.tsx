import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { Button } from "../components";

export default function Connect() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
      <Button label="Connect Spotify" width={200} height={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
