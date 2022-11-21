import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { Button } from "../components";

export default function Connect() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect</Text>
      <Text style={styles.subtitle}>Please connect to the services you want to import your music.</Text>
      <Button
        label="Spotify"
        icon="FontAwesome5.spotify"
        iconColor="#1CE68C"
        style={styles.btn}
      />
      <Button
        label="Apple Music"
        icon="FontAwesome5.apple"
        style={styles.btn}
      />
      <Button
        label="YouTube"
        icon="FontAwesome5.youtube"
        iconColor="#FF0100"
        style={styles.btn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 40,
    paddingLeft: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  btn: {
    marginBottom: 20,
  },
});
