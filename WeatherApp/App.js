/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
 } from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

import { 
  Card, CardItem,
  Input, Item, Form, Header, Title, Body, Container, Left, Right, Button } from 'native-base';
import Dialog from 'react-native-dialog';
import useAxios from 'axios-hooks';


function  App() {

const [modalVisible, setModalVisible] = useState(false); 
const [cityName, setCityName] = useState(""); 
const [cities, setCities] = useState([]);



const openDialog = () => {
  setModalVisible(true);
}

const addCity = () => {
  setCities([...cities,{id:cities.lenth, name: cityName}]);
  setModalVisible(false);
}

const cancelCity = () => {
  setModalVisible(false);
}

const refreshForecast = () => {
  refetch();
}
const deletCity = () => {
    params.deletCity(id);
  }

  const deleteCity = (id) => {
    let filteredArray = cities.filter(city => city.id !== id);
    setCities(filteredArray);
  }


const WeatherFrecast = (params) => {
  const API_KEY = '25b247c1bfa9646c7951b6a6a1f64dac';
  const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const API_ICON = 'https://openweathermap.org/img/w/'
  const city = params.city;
  const [{data, loading, error}, refetch] = useAxios(URL+city+'&units=metric'+'&appid='+API_KEY)
  

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error !!!</Text>;
  console.log(data);
  return (
    <Card>
      <CardItem>
        <Body>
          <Text>
            {city}
            
          </Text>
          
          <Text>Main: {data.weather[0].main}</Text>
          <Text>Temp: {data.main.temp} °C</Text>
          <Text>Min-Max: {data.main.temp_min+ '-' +data.main.temp_max}</Text>
          <Right>
          <Text> {data.main.weather.icon} </Text>
          </Right>
        </Body>
       
      </CardItem>
      
      <CardItem footer button onPress={deleteCity}>
       <Left>
        <Text>-delet-</Text>
       </Left>
       <Right>
        <Text>-refresh-</Text>
       </Right>
      </CardItem>
     </Card>
  )
}

  return (
       <Container>
         <Header>
           <Left />
             <Body>
               <Title>Weather App</Title>
             </Body>
             <Right>
               <Button>
                 <Text style={{color: '#fff'}} onPress={openDialog}>Add</Text>
               </Button>
             </Right>
         </Header>
         <ScrollView>
          {!modalVisible && cities.map(city => (
           <WeatherFrecast key={city.id} city={city.name} id={city.id} 
            deletCity={deleteCity}/> 
          ))}
         
          </ScrollView>
         <Dialog.Container visible={modalVisible}>
            <Dialog.Title>Add a new city</Dialog.Title>
              <Form>
                <Item>
                  <Input onChangeText={ (text) => setCityName(text)} placeholder="cityname"/>
                </Item>
              </Form>
            <Dialog.Button label="Cancel" onPress={cancelCity} />
          <Dialog.Button label="Add" onPress={addCity} />
        </Dialog.Container>
       </Container>
      
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
