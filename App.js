import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

const [ages, setAges] = useState('')
const [limits, setLimits] = useState({lower:'', upper:''})

  const Calc = () => {
    const lower =(220-ages)*0.65
    const upper = (220-ages)*0.85
    setLimits({lower: lower.toFixed(), upper: upper.toFixed()})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
      style={styles.field}
      placeholder='gfgfgf'
      value={ages}
      onChangeText={text => setAges(text)}
       keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>
        {limits.lower} - {limits.upper}
      </Text>
      <Button title='Calculate' onPress={Calc}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 20,
    margin: 8, 
  },
  field:{
    marginTop: 8, 
    marginBottom: 8, 
  }
});