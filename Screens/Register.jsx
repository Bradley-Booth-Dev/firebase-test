import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { authentication } from "../Firebase/firebaseConfig";

export default function Test({ isSignedIn, setIsSignedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsSignedIn(true);
        const user = userCredential.user;
        updateProfile(user, {
          displayName: displayName,
        })
          .then(() => {
            alert("User profile created!");
            setIsSignedIn(true);
            setEmail("");
            setPassword("");
            setDisplayName("");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Register Here:</Text>
      <TextInput
        placeholder="Username"
        value={displayName}
        onChangeText={(text) => setDisplayName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Register" onPress={RegisterUser} />
    </View>
  );
}
