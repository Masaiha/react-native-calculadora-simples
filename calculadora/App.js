import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Dimensions } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';
import History from './src/components/History';

const initialState = {
  displayValue: '',
  values: [],
  operations: [],
  current: 0,
  history: ''
}

export default class App extends Component {
  
  state = { ...initialState }

  addDigit = n => {
    if(n === '.' && this.state.displayValue.includes('.') ) return;

    const displayValue = this.state.displayValue + n;
    const current = parseFloat(displayValue);
    
    this.setState({ displayValue, current})
  }

  clearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = operation => {
    let operations = [...this.state.operations]
    let history = this.state.history;

    operations.push(operation);
    history = history + this.state.current + operation;

    this.setState({ displayValue: '', operations, history })
    
    this.atualizaListaValores();
    if(operation === '=') this.soma();
  }

  atualizaListaValores = () => {
    const values = [...this.state.values]
    const current = this.state.current;
    
     values.push(current);
     this.setState({ values })
     this.setState({ isUpdated: true })

     return true;    
  }

  soma = () => {
    let values = [...this.state.values, this.state.current];
    let soma = values[0];
    values.reduce( (acumulador, valor, i) => {

      switch (this.state.operations[i-1]) {
        case '+': soma = soma + valor
          break;
        case '-': soma = soma - valor
          break;
        case '/': soma = soma / valor
          break;
        case '*': soma = soma * valor
          break;
        default:
          break;
      }
    }, 0)

    this.setState({ displayValue: soma })
  }

  render(){
      return ( 
           <View style={style.container}>
             <Display value={this.state.displayValue} />
             <History history={this.state.history}/>
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
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});