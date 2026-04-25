import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={style.conteiner}>
      <Text>Init projects!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    textAlign: "center",
  },
});
