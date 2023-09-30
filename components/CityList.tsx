// CityList.tsx
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/store";
import { View, Text, ScrollView } from "react-native";

const mapStateToProps = (state: RootState) => ({
  searchedCities: state.city.searchedCities,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & {
  handleAddCity: (city: string) => void;
};

const CityList: React.FC<PropsFromRedux> = ({
  searchedCities,
  handleAddCity,
}) => {
  return (
    <ScrollView
      style={{ gap: 5, flexDirection: "row", marginTop: 10, paddingLeft: 10 }}
    >
      <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
        {searchedCities.map((city, index) => (
          <View key={index}>
            <Text
              style={{
                fontSize: 15,
                backgroundColor: "royalblue",
                color: "white",
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 30,
              }}
              onPress={() => handleAddCity(city)}
            >
              {city.charAt(0).toUpperCase()}
              {city.slice(1)}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default connector(CityList);
