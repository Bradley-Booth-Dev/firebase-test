import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Test from "./Screens/Register";
import { useState } from "react";
import Data from "./Screens/Data";
import SignIn from "./Screens/SignIn";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <View style={styles.container}>
      <Test isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <Data />
      <SignIn isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
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
});
