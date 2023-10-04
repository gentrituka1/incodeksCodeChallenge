import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { addCity } from "../redux/cityReducer";
import { getWeather } from "../api/weatherApi";
import CityList from "./CityList";

const connector = connect(null, { addCity });

type PropsFromRedux = ConnectedProps<typeof connector> & {
  setWeather: (weather: any) => void;
};

const SearchCity: React.FC<PropsFromRedux> = ({ addCity, setWeather }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleAddCity = async (city = "") => {
    const response = await getWeather(city || searchCity);
    setWeather(response);
    if (searchCity === "" || response.cod === "404") return;
    addCity(city || searchCity);
    setSearchCity("");
  };

  const onChange = (event: any) => {
    setSearchCity(event);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={searchCity}
          onChangeText={onChange}
          placeholder="Enter a city name"
          style={styles.input}
        />
        <Button
          title={"Search a City"}
          onPress={() => handleAddCity()}
          color={"royalblue"}
        />
      </View>
      <CityList handleAddCity={handleAddCity} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: "royalblue",
    textAlign: "center",
    padding: 5,
    flex: 1,
  },
});

export default connector(SearchCity);
