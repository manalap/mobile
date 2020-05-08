import React, {Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



class Board extends React.Component {
  

   handleClick(i) {
    
    
    const squares = current.squares.slice();

    
     if (calculateWinner(squares) || squares[i]) {
       return;
     }
     squares[i] = this.state.xIsNext ?  'x' : 'O';
     this.setState({
       
      squares: squares,
      xIsNext: !this.state.xIsNext
  });
 }

   
   renderSquare(i) {
    return ( 
    <Square 
     value={this.props.squares[i]} 
     onPress={() => this.handleClick(i)} 
    />
  
    );
    }

  render() {
    //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    

    return (
      <div>
        
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );

    }
  }

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
        squares: Array(9).fill(null),
     
    
      xIsNext: true,
    };
  }

  render() {
   
   //const  winner = calculateWinner(this.squares);
   
   
    
    
    let status;
    if(winner) {
      status = 'winner: ' +winner;
    } else {
      status = 'Next player: ' +(this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className='game'>
        <div className="game-board">
          <Board 
          
           squares={this.squares}
           onPress={(i) => this.handleClick(i)}
          
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          
        </div>
      </div>
    );
  }


}



function Square(props) {
  
  //state for letter x , o, ""
  
    return (
    <Button className="square" onPress={() => props.onPress}>
      {props.value}
    </Button>
    );
  
  
    }
  



export default function App() {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

