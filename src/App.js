import React from 'react';
import './App.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '0',
      currentExpression: ''
    };
    this.clearDisplay = this.clearDisplay.bind(this);
    this.addToExpression = this.addToExpression.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }
  
  clearDisplay(){
    this.setState({currentValue: '0',
                  currentExpression: ''})
  }
  
  evaluate(){
    this.setState({currentExpression: (eval(this.state.currentExpression)) % 1 == 0 ? (eval(this.state.currentExpression)) : (eval(this.state.currentExpression)).toFixed(2)})
  }
  
  addToExpression(newChar){
   
    
    switch(newChar){
      case '0': 
        if (/^0/.test(this.state.currentExpression.split(/[/+*-]/).pop())){break}
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9': 
        this.setState({currentExpression: this.state.currentExpression + newChar});
        break;
        
      case '+':
      case '-':
      case '*':
      case '/':
        if (this.state.currentValue != 0){this.setState({currentExpression: this.state.currentValue})}
        if (this.state.currentExpression == ''){break}
        
        if (/[+*-/]$/.test(this.state.currentExpression)){
          this.setState({currentExpression: this.state.currentExpression.slice(0, -1) + newChar});
        } else {
          this.setState({currentExpression: this.state.currentExpression + newChar});
        };
        break;
        
      case '.':
        if (!this.state.currentExpression.split(/[/+*-]/).pop().includes('.')){
          this.setState({currentExpression: this.state.currentExpression + newChar})
        }
      
    
    }
  }
  
  List = [
    {
      button: "7",
      id: 'seven',
      function: () => this.addToExpression("7")
    },
    {
      button: "8",
      id: 'eight',
      function: () => this.addToExpression("8")
    },
    {
      button: "9",
      id: 'nine',
      function: () => this.addToExpression("9")
    },
    {
      button: "+",
      id: 'add',
      function: () => this.addToExpression('+')
    },
    {
      button: "4",
      id: 'four',
      function: () => this.addToExpression("4")
    },
    {
      button: "5",
      id: 'five',
      function: () => this.addToExpression("5")
    },
    {
      button: "6",
      id: 'six',
      function: () => this.addToExpression("6")
    },
    {
      button: "-",
      id: 'subtract',
      function: () => this.addToExpression("-")
    },
    {
      button: "1",
      id: 'one',
      function: () => this.addToExpression("1")
    },
    {
      button: "2",
      id: 'two',
      function: () => this.addToExpression("2")
    },
    {
      button: "3",
      id: 'three',
      function: () => this.addToExpression("3")
    },
    {
      button: "X",
      id: 'multiply',
      function: () => this.addToExpression("*")
    },
    {
      button: ".",
      id: 'decimal',
      function: () => this.addToExpression(".")
    },
    {
      button: "0",
      id: 'zero',
      function: () => this.addToExpression("0")
    },
    {
      button: "=",
      id: 'equals',
      function: () => this.evaluate()
    },
    {
      button: "/",
      id: 'divide',
      function: () => this.addToExpression("/")
    },
    {
      button: "Clear",
      id: 'clear',
      function: () => this.clearDisplay()
    }
  ];

  render() {
    var buttons = this.List.map(item => <button id={item.id} className="btn" onClick={item.function} >{item.button}</button>);
    return (
      <div id="calculatorWrapper">
          <Display currentValue={this.state.currentValue} currentExpression={this.state.currentExpression}/>
        <div id="buttonsWrapper">{buttons}</div>
      </div>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return <h1 id="display">{this.props.currentExpression == '' ? this.props.currentValue : this.props.currentExpression}</h1>;
  }
}

export default Calculator;
