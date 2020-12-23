import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar({ search, setText, text }) {
  const handleSubmit = () => {
    search();
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        onChangeText={(val) => setText(val)}
        onSubmitEditing={handleSubmit}
        placeholder="Search location..."
        returnKeyType="search"
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchBar: {
    backgroundColor: "black",
    borderRadius: 25,
    opacity: 0.8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
