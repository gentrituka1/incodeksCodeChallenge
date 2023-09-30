import React from "react";
import { View, Image, Text } from "react-native";

type Props = {
  text: string;
};

export default function ReusableSpinnyBoi({ text }: Props) {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "royalblue", fontSize: 30 }}>
        Loading {text} ...
      </Text>
      <Image
        source={require("../assets/questionmarkguy.gif")}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}
