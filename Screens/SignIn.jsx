import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { authentication } from "../Firebase/firebaseConfig";

export default function SignIn({ isSignedIn, setIsSignedIn }) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication, signInEmail, signInPassword)
      .then((res) => {
        setIsSignedIn(true);
        alert("Signed In successfully!");
        setSignInEmail("");
        setSignInPassword("");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const SignOutUser = () => {
    signOut(authentication)
      .then((res) => {
        alert("Signed out successfully!");
        setIsSignedIn(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <Text>Sign In Here:</Text>
      <TextInput
        placeholder="Email"
        value={signInEmail}
        onChangeText={(text) => setSignInEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={signInPassword}
        secureTextEntry={true}
        onChangeText={(text) => setSignInPassword(text)}
      />
      {isSignedIn === true ? (
        <Button title="Sign Out" onPress={SignOutUser} />
      ) : (
        <Button title="Sign in" onPress={SignInUser} />
      )}
    </View>
  );
}
