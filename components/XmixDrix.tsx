import {FC, useState} from 'react';
import { StyleSheet, Image, View, StatusBar, Platform, TouchableOpacity, Text } from 'react-native';
import Constants from 'expo-constants';
import imgs from '../ImgBundler';
const statusBarHeightIOS = Constants.statusBarHeight;
const statusBarHeightAndroid = StatusBar.currentHeight;

const winCheck = (squares : Array<string>) =>{
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a,b,c] = winningPatterns[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      //since all are equals it dosen't matter which letter
      return squares[a] 
    }
  }
  return null
}

const Brick :FC <{onClick: ()=>void, value:string}>=(props) =>{

  const onClick = () => {
    props.onClick()
  }
  return(
    <View style={styles.brick}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
          <Image source={
            props.value == 'X' ? imgs.x : props.value === 'O' ? imgs.o : imgs.empty
          }></Image>
      </TouchableOpacity>
    </View>

  )
}

const XmixDrix: FC = () => {
  
  const [squares, setSquares]  = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true);

  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  const handleClick = (i:number) => {
    // if true then done playing/pressing
    if(winCheck(squares) || squares[i]){  return}

    // in this case o cannot be x and opposite
    //the assumption will be only if there is null value 
    squares[i] = isX ? 'X':'O';
    setSquares(squares)
    setIsX(!isX)
  }
  const winner = winCheck(squares)
  let status = winner ? `Winner: ${winner}` : `Next Player: ${isX ? 'X' : 'O'}`
  
  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        <Brick onClick={() => handleClick(0)} value={squares[0]}></Brick>
        <Brick onClick={() => handleClick(1)} value={squares[1]}></Brick>
        <Brick onClick={() => handleClick(2)} value={squares[2]}></Brick>
      </View>

      <View style={styles.row}>
        <Brick onClick={() => handleClick(3)} value={squares[3]}></Brick>
        <Brick onClick={() => handleClick(4)} value={squares[4]}></Brick>
        <Brick onClick={() => handleClick(5)} value={squares[5]}></Brick>
      </View>

      <View style={styles.row}>
        <Brick onClick={() => handleClick(6)} value={squares[6]}></Brick>
        <Brick onClick={() => handleClick(7)} value={squares[7]}></Brick>
        <Brick onClick={() => handleClick(8)} value={squares[8]}></Brick>
      </View>
      
      <View style={styles.container}>
      <Image source={
        status == `Next Player: X` ? imgs.xplay 
        : status == `Next Player: O` ? imgs.oplay
        : status == `Winner: X` ? imgs.xwin
        : status == `Winner: O` ? imgs.owin
        : imgs.empty
      }
        ></Image>
      </View>

      <View style={styles.centerContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
        <Text>Restart Game👇</Text>
        <Image source={imgs.reset} style={styles.image}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == 'android' ? statusBarHeightAndroid : statusBarHeightIOS,
    flex: 1,
    backgroundColor: 'grey'
  },
  row:{
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  brick:{
    flex:1,
    backgroundColor: 'white',
    margin: 5,
    aspectRatio: 1
  },
  button:{
    flex:1,
  },
  test: {
    flex:1,
    backgroundColor: 'red',
  },
  centerContainer:{
    flex:1,
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  image:{
    // backgroundColor: 'blue',
    height:100,
    width:100,
  }
});

export default XmixDrix
 