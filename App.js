import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';
import SunInfo from './components/SunInfo';


export default function App() {

  const apiKey = '1f35797f3a2964be07575a1b832701b8';

  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState(null);

  const captureCity = city => {
    setCity(city);
  };

  const getCoordinates = (city) => {
    const endPoint = 'https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=';
    const target = `${endPoint}${city}&appid=${apiKey}`; 

    return fetch(target)
      .then(data => data.json())
      .then(data => data.city.coord);
  };

  const getForecast = async () => {
    const { lat, lon } = await getCoordinates(city);

    const endPoint = `https://api.openweathermap.org/data/2.5/onecall?lang=pt_br&units=metric&lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily`;
    const target = `${endPoint}&appid=${apiKey}`; 
    
    fetch(target)
    .then(data => data.json())
    .then(data => {
      setForecast(data.current);
      Keyboard.dismiss();
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.entry}>
        <TextInput 
          style={styles.cityName}
          placeholder="Digite o nome da cidade"
          value={city}
          onChangeText={captureCity}
        />
        <Button
          title="Ok"
          onPress={getForecast}
        />
      </View>

      {forecast && <SunInfo forecast={forecast} />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: "column",
    flex: 1,
    backgroundColor: '#FFF'
  },
  entry:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  cityName: {
    padding: 12,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
  }
});