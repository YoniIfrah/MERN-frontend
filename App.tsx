import {FC, useState} from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
const statusBarHeightIOS = Constants.statusBarHeight;
const statusBarHeightAndroid = StatusBar.currentHeight;



const Brick :FC <{onClick: ()=>void, getCurrentPlayer: () => number}>=(props) =>{
  const [player,setPlayer] = useState(0)

  const onClick = () => {
    setPlayer(props.getCurrentPlayer);
    props.onClick()
  }
  const getbackground= () => {
    switch (player) {
      case 0:
        return 'white';
      case 1:
        return 'red';
      case 2:
        return 'green';    
      default:
        return 'black'; //error
    }
  }
  return(
    <View style={styles.brick}>
      <TouchableOpacity style={[styles.button, {backgroundColor: getbackground()}]} onPress={onClick}>

      </TouchableOpacity>
    </View>

  )
}

const App: FC = () => {
  //the app will need to send props to the other components so we will know the turn of each player
  // 0: not selelct, 1: x, 2:O
  //TODO: need to add matrix to know if the player won, the check will be at the end of onBrickClick
  //TODO: after a win the TouchableOpacity need to be enabled =false so it wont be pressed
  //TODO: need to add to assets pics of X and O so it will be insted of green and red
  var turn = 0 //mybe need to be in useState
  const getCurrentPlayer = () => {
    return turn
  }
  const onBrickClick = () => {
    turn = turn === 1 ? 2 : 1
    console.log("onBrickClick, turn", turn)
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        {//TODO: need to add each brick a number so we know who was clicked
        }
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
      </View>

      <View style={styles.row}>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
      </View>

      <View style={styles.row}>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
        <Brick onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer}></Brick>
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
  }
});

export default App
 