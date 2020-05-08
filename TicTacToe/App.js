import React, {Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Banner() {
  return(
    <View style={styles.banner}>
      <Text style={styles.bannerText}> Tic Tac Toe </Text>
    </View>
  )
}

function Square(props)  {
  
  
    return (
      <Text style={styles.Text} className="square" onPress={props.onPress }>
        {props.value}
      </Text>
    );
  }

class Board extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    //if winner :
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({squares: squares,
      xIsNext: !this.state.xIsNext});
  }

  renderSquare(i) {
    return (<Square value={this.state.squares[i]} 
    onPress={() => this.handleClick(i)}
    />
    );
  }

  

  render() {
    
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      
      <View style={styles.container}>
        <Banner />
        
        <Text> {status}</Text>
        <View style={{flexDirection:'row',padding:1}}> 
          
         {this.renderSquare(0)}  
         {this.renderSquare(1)}  
         {this.renderSquare(2)}  
         
        </View>
        <View style={{flexDirection:'row',padding:1}}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={{flexDirection:'row',padding:1}}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
      </View>
    );
  }
}

export default class Game extends React.Component {
  render() {
    return (
      <View>
          <Board />

      </View>
        
      
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const styles = StyleSheet.create(
  {
    container: {
      
     
      jusfityContent: 'center',
      
    },

    banner: {
      backgroundColor: 'skyblue',
      justifyContent:'center',
      marginTop: 50,
      padding: 20,
    },

    Text: {
      backgroundColor: 'skyblue',
      fontSize: 30,
      fontStyle: 'bold',
      color: '#fff',
      justifyContent: 'center',
      padding: 1,
      width: 40,
      height: 40,
      borderstyle: 'solid',
    },
    bannerText:{
      color: 'white',
      textAlign: 'center',

      

    },

  });
