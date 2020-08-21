import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Dimensions } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';
// import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';


export default class App extends Component {
  
  state = {
    displayValue: '0',

  }

  addDigit = n => {
    this.setState({ displayValue: this.state.displayValue + n })
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }

  setOperation = operation => {
    
  }

  render(){
      return ( 
           <View style={style.container}>
             <Display value={this.state.displayValue} />
             <View style={style.button}>
              <Button label='AC' triple onClick={this.clearMemory}/>
              <Button label='/' operation onClick={this.setOperation}/>
              <Button label='7' onClick={this.addDigit} />
              <Button label='8' onClick={this.addDigit}/>
              <Button label='9' onClick={this.addDigit}/>
              <Button label='*' operation onClick={this.setOperation}/>
              <Button label='4' onClick={this.addDigit}/>
              <Button label='5' onClick={this.addDigit}/>
              <Button label='6' onClick={this.addDigit}/>
              <Button label='-' operation onClick={this.setOperation}/>
              <Button label='1' onClick={this.addDigit}/>
              <Button label='2' onClick={this.addDigit}/>
              <Button label='3' onClick={this.addDigit}/>
              <Button label='+' operation onClick={this.setOperation}/>
              <Button label='0' double onClick={this.addDigit}/>
              <Button label='.' onClick={this.addDigit}/>
              <Button label='=' operation onClick={this.setOperation}/>

             </View> 
           </View> 
      );
  }
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});