import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchCity from "./components/SearchCity";
import ShowWeather from "./components/ShowWeather";
import * as Location from "expo-location";
import { getUserWeather } from "./api/weatherApi";
export default function App() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      const response = await getUserWeather(
        loc.coords.latitude,
        loc.coords.longitude
      );
      setWeather(response);
    })();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <SearchCity setWeather={setWeather} />
      </View>
      <View style={styles.container}>
        <ShowWeather weather={weather} />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  header: {
    marginTop: 35,
  },
});
