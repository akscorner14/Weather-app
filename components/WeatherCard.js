import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherCard(props) {
  const {
    city,
    country,
    feelsLike,
    humidity,
    main,
    maxTemp,
    minTemp,
    Temp,
    windSpeed,
  } = props.weather;
  return (
    <View style={styles.container}>
      <View style={styles.nameText}>
        <Text style={styles.cityText}>{city}</Text>
        <Text style={styles.countryText}>{country}</Text>
      </View>
      <View style={styles.icon}>
        <Text style={styles.temp}>
          {Temp}
          <Text style={styles.symbol}>°C</Text>
        </Text>
      </View>
      <Text style={styles.main}>{main}</Text>
      <Text style={styles.tempRange}>{`${minTemp}°C / ${maxTemp}°C`}</Text>
      <View style={styles.addInfo}>
        <View style={styles.info}>
          <Text style={styles.infoText}>Feels like</Text>
          <Text style={styles.infoText}>{feelsLike}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Humidity</Text>
          <Text style={styles.infoText}>{humidity}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Wind speed</Text>
          <Text style={styles.infoText}>{windSpeed}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  nameText: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  cityText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  countryText: {
    fontSize: 14,
    position: "absolute",
    right: -30,
  },
  temp: {
    fontSize: 140,
    fontWeight: "bold",
  },
  symbol: {
    fontSize: 120,
    fontWeight: "normal",
  },
  main: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tempRange: {
    fontSize: 18,
    marginVertical: 10,
  },
  addInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    width: "100%",
  },
  info: {
    backgroundColor: "#222",
    opacity: 0.8,
    padding: 20,
  },
  infoText: {
    margin: 5,
    textAlign: "center",
  },
});
