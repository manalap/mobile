import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, Keyboard,Platform } from 'react-native';



/*
class Banner extends React.Component {
  render() {
    return (
      <View style={styles.banner}>
        <Text style={styles.bannerText}>ToDo example with React Native</Text>
      </View>
    );
  }
}
*/

function Banner() {
	return(
		<View style={styles.banner}>
			<Text style={styles.bannerText}> Todo example with React Native</Text>

		</View>
	)

}



class ListItem extends React.Component {
	render() {
	return(
	  <View style={styles.listItem}>
	   <Text style={styles.listItemText}>* {this.props.text}</Text>
	   <Text style={styles.listItemDelete}>X</Text>
	  </View> 
	 
	  )
	 }
	}
	
		
function ToDoList(){
	//todo edit text
	const [newItem, setItemText] = useState("");
	//add a new item
	const addItem = () => {
		//alert(newItem);
		setItems([...items, { text:newItem, id:Math.random() }]);
		setItemText("");
		Keyboard.dismiss();
	}

	//todo list
	const [items, setItems] = useState([]);

	const removeItem = (id) =>{
		//filter
		const newItem = items.filter(item => item.id !== id);
		setItems(newItem);
	}

	return(
		<View>
			<View style={styles.addToDo}>
				<TextInput
					value={newItem}
					onChangeText={text => setItemText(text)}
					style={styles.addToDoTextInput}
					placeholder="Write a new todo here"
				/>
				<Button title="Add" onPress={addItem}/>
			</View>
			<ScrollView style={styles.list}>
				{
					items.map(
						item => (
							<View style={styles.listItem} key={item.id}>
								<Text>{item.text}</Text>
								
								<Text onPress={() => removeItem(item.id)} style={styles.listItemDelete}> X </Text>
							</View>
						))}
			</ScrollView>

		</View>
	)
}	

/*
class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [], text: ''};
	}
	 
	
	addToDoItem = ()=>{
		if (this.state.text !==''){
		   this.setState({
			   items: [this.state.items, this.state.text],
			   text:''
		   });
		   Keyboard.dismiss();
	   }
	  }	 
	  
	
   render() {
	var items = this.state.items.map(function(item,index){
		return (
			<ListItem text={item} key={index} index={index} />
		   )
		 });
	
    return (
      <View>
        <View style={styles.addToDo}>
          <TextInput 
		  style={styles.addToDoTextInput}
		  onchangeText={(Text) => this.setState({text})}
		  value={this.state.text}	/>
          <Button title="Add"
			style={styles.addToDoButton}
			onPress={this.addToDoItem}/>
        </View>
        <ScrollView style={styles.list}>
			{items}
        </ScrollView>   
      </View>
    );
  }

}
*/
export default function App() {
  return (
    <View style={styles.safeArea}>
		  <Banner />
		  <ToDoList />
	</View>
  );
}


const styles = StyleSheet.create({
	safeArea: {
	  flex: 1,
	  paddingTop: Platform.OS === 'android' ? 25 : 0,
	  margin: 5
	},
	banner: {
	  backgroundColor: 'cadetblue',
	  justifyContent: 'center',
	  marginBottom: 20
	},
	bannerText: {
	  color: 'white',
	  textAlign: 'center',
	  paddingTop: 20,
	  paddingBottom: 20
	},
	addToDo: {
	  flexDirection: 'row',
	  marginBottom: 20,
	},
	addToDoTextInput : {
	  borderWidth: 1,
	  borderStyle: 'solid',
	  borderColor: '#ccc',
	  padding: 5,
	  margin: 2,
	  flex: 1,
	},
	list: {
	  color: 'black',
	  margin: 2,
	},
	listItem: {
	  flex: 1, 
	  flexDirection: 'row',
	  margin: 5
	},
	listItemDelete: {
	  marginStart: 10,
	  color: 'red',
	  fontWeight: 'bold'
	}
  });