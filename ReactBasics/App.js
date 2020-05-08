import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';



class Movie extends Component {
	render() {
	return(
	<View style={{borderWidth:'1px', padding:'2px',marginBottom: '2px'}}>
		<Text style={{fontWeight:'bold'}}>{this.props.title}</Text>
		<Text>{this.props.theatre}</Text>
	</View>
	 )

	}
0}	
export default class App extends Component {
	
	
	
	
  render() {	
  
  return (
    <View style={styles.container}>
		<Movie title = "Joker" theatre="Kinosali 2"/>
		<Movie title = "Frozen 2" theatre="Fantaasia 3"/>
		<Movie title = "Mäkeläiset" theatre="Tennispalatsi"/>
	 
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	padding: 8,
  },
});
