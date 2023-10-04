import React from "react";
import { ScrollView, View, Text } from "react-native";
import ReusableSpinnyBoi from "./SpinnyB";

type ShowWeatherProps = {
  weather: any;
};

const helper = (data: any[]) => {
  const d = new Date();
  const hour = d.getHours();

  const newArray = [];

  for (const item of data) {
    if (item.dt_txt.includes(`15:00:00`)) {
      newArray.push(item);
    }
  }
  return newArray;
};

const ShowWeather = ({ weather }: ShowWeatherProps) => {
  if (!weather?.list?.length) {
    return <Text>There is no data!</Text>;
  }

  const fiveDayWeather = helper(weather?.list);

  return (
    <ScrollView style={{ flexDirection: "column", width: "100%" }}>
      <Text
        style={{
          color: "crimson",
          fontSize: 20,
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        Current Weather
      </Text>
      <Text style={{ marginTop: 20, fontSize: 45, textAlign: "center" }}>
        {fiveDayWeather[0].main.temp.toFixed(0)}°C
      </Text>
      <Text style={{ textAlign: "center" }}>
        {fiveDayWeather[0].weather[0].description}
      </Text>
      <View style={{ gap: 20, alignItems: "flex-start", marginTop: 20 }}>
        <Text style={{ fontSize: 18, color: "crimson" }}>Next 5 Days</Text>
        {fiveDayWeather?.map((item, index) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
              }}
              key={index}
            >
              <Text>{item.dt_txt.split(" ")[0]}</Text>
              <View>
                <Text>{item.main.temp.toFixed(0)}°C</Text>
                <Text>{item.weather[0].description}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ShowWeather;
