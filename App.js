import React, { useState } from "react";
import { API_BASE, API_KEY } from "@env";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [text, setText] = useState("");
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    feelsLike: "",
    humidity: "",
    main: "",
    maxTemp: "",
    minTemp: "",
    Temp: "",
    windSpeed: "",
  });

  const search = async () => {
    try {
      const result = await fetch(
        `${API_BASE}weather?q=${text}&units=metric&APPID=${API_KEY}`
      );
      const res = await result.json();
      setWeather({
        city: res.name,
        country: res.sys.country,
        feelsLike: Math.round(res.main.feels_like),
        humidity: res.main.humidity,
        main: res.weather[0].main,
        maxTemp: Math.round(res.main.temp_max),
        minTemp: Math.round(res.main.temp_min),
        Temp: Math.round(res.main.temp),
        windSpeed: res.wind.speed,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.container}
        source={require("./assets/illustration1.png")}
      >
        <View style={styles.safeView}>
          <Header />
          <SearchBar search={search} setText={setText} text={text} />
          <WeatherCard weather={weather} />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    flex: 1,
    paddingTop: 33,
  },
  safeView: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
