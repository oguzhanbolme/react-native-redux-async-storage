import React from 'react'
import { Button, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from "./actions"

export default function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <View style={{flex:1, justifyContent:"center"}}>
      <Text style={{textAlign:"center", fontSize:24, fontWeight:"bold"}}>Redux + Async Storage</Text>
      <Text style={{textAlign:"center", fontSize:24, fontWeight:"bold", padding:10}}>{counter}</Text>
      <Button title="+" onPress={() => dispatch(increment())}/>
      <Text></Text>
      <Button title="-" onPress={() => dispatch(decrement())}/>
      <Text></Text>
      <Button title="Reset" onPress={() => dispatch(reset())}/>
    </View>
  )
}