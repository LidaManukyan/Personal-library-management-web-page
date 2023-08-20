import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");


  const handleClick = (e) => {
    // անել այնպես որ օպերատորները չգրվեն մի քանի անգ

    setValue(value.concat(e.target.name));
  };


  const clear = () => {
    setValue("");
  };

  const clearback = () => {
    setValue(value.slice(0, value.length - 1));
  };

    const calculatePercent = (value, percent) => {
    return (value * percent) / 100;
  };

  const isOperator=(char)=>['+','-','*','/'].include(char)
  const priority=(operator)=>{
    if(operator=== '+' || '-')return 1 
    if(operator==='*'|| '/') return 2
    return 0
  }

  const operatorClick = (operator) => {
    if (value === '' || value.endsWith('+') || value.endsWith('-') || value.endsWith('*') || value.endsWith('/')) {
      return; 
    }
    setValue(value + operator);
  };
  
  // const equal =(operator, operand1,operand2)=>{
  //   switch(operator){
  //     case '+':
  //     return operand1+operand2
  //     break;
  //     case '-':
  //       return (operand1-operand2)
  //       break;
  //       case '*':
  //         return operand1*operand2
  //         break;
  //         case '/':
  //           return operand1/operand2
  //           break;
  //           default:
  //             return 0;
  //   }
  // }

  const expression = (postfixelement) => {
    const stack = [];
  
    for (const element of postfixelement) {
      if (!isOperator(element)) {
        stack.push(parseFloat(element));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const result = equal(element, operand2, operand1);
        stack.push(result);
      }
    }
  
    return stack[0];
  };
    
    
  



  const equal = () => {
    setValue(eval(value).toString());
   };

  return (
    <div className="wrapper">
      <input className="in" type="text" value={value} placeholder="0" />

      <div className="bord">
        <button name="Clear" className="operation" onClick={clear}>
          Clear
        </button>
        <button name="C" className="operation" onClick={clearback}>
          C
        </button>
        <button name="%" className="operation" onClick={calculatePercent}>
          %
        </button>
        <button name="/" className="operation" onClick={()=>operatorClick('/')}>
          /
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" className="operation" onClick={()=>operatorClick('*')}>
          *
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" className="operation" onClick={()=>operatorClick('-')}>
          -
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" className="operation" onClick={()=>operatorClick('+')}>
          +
        </button>
        <button name="0" className="zero" onClick={handleClick}>
          0
        </button>
        <button name="." className="operation" onClick={handleClick}>
          .
        </button>
        <button name="=" className="operation" onClick={equal}>
          
          =
        </button>
        <button name="(" onClick={handleClick}>
          (
        </button>
        <button name=")" onClick={handleClick}>
          )
        </button>
      </div>
    </div>
  );
}

export default App;
