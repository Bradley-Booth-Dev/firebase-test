import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { db } from "../Firebase/firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore/lite";
import { useState } from "react";

export default function Data() {
  const [city, setCity] = useState("");

  const GetData = async () => {
    const citiesCol = collection(db, "cities");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    console.log(cityList);
    return cityList;
  };

  const AddData = async () => {
    await addDoc(collection(db, "cities"), {
      city_name: city,
    });
    setCity("");
  };

  return (
    <View>
      <Button title="Get Data" onPress={GetData} />
      <TextInput
        placeholder="Enter city"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Add Data" onPress={AddData} />
    </View>
  );
}
