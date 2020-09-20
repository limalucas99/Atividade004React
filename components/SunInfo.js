import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Card from './Card';

const SunInfo = (props) => {
    return (
        <Card styles={styles.card}>
          <View style={styles.container}>
            <View style={styles.iconsContainer}>
              {props.forecast.weather.map(weather => (
                <Image 
                  key={weather.id}
                  style={styles.icon}
                  source={{uri: `https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}.png`}}
                />
              ))}
              
            </View>       
            <View style={styles.info}>
              <View style={styles.firstLine}>
                <Text style={styles.sunInfo}>Nascer do sol: {new Date(props.forecast.sunrise * 1000).toLocaleTimeString()}</Text>
                <Text style={styles.sunInfo}>Pôr do sol: {new Date(props.forecast.sunset * 1000).toLocaleTimeString()}</Text>
              </View>
              <View style={styles.secondLine}>
                <Text>Sensação térmica: {props.forecast.feels_like + '\u00B0C'}</Text>
              </View>
            </View>
          </View>
        </Card>
        
      );
    }
    
    const styles = StyleSheet.create({
      card: {
        marginBottom: 8,
      },
      container: {
        flexDirection: 'row'
      },
      iconsContainer: {
        flexDirection: 'row'
      },
      icon: {
        width: 45,
        height: 45
      },
      firstLine: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
      info: {
        marginLeft: 4
      },
      sunInfo: {
        marginHorizontal: 2
      },
      secondLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
      }
    });
    
    export default SunInfo;