import React, { useState }  from "react";
import "./index.css";

export default function Calculator() {
  const [operation, setOperation] = useState('+');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(null);
  const reset = () => {
    setOperation('+');
    setInput1('');
    setInput2('');
    setResult(null);
  }
  const performAction = (operation) => {
    setOperation(operation);
    setCount(count+1)
    switch (operation) {
      case '+': {
        setResult(+input1 + +input2);
        break;
      }
      case '-': {
        setResult(+input1 - +input2);
        break;
      }
      case '*': {
        setResult(+input1 * +input2);
        break;
      }
      case '/': {
        setResult(+input1 / +input2);
        break;
      }
      default: {
      }

    }
  }
  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations"> Total operations performed: {count}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input type="number" className="ml-3 mr-3"
            value={input1}
            data-testid="app-input1" 
            autoComplete="off" 
            placeholder="Eg: 1"
            name="input1" 
            onChange={(e)=> setInput1(e.target.value)} />
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{operation}</label>
            <input type="number" 
            value={input2}
            data-testid="app-input2" 
            autoComplete="off" 
            className="ml-3 mr-3"
            placeholder="Eg: 2" onChange={(e)=>setInput2(e.target.value)} />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" type="submit" data-testid="addButton" onClick={()=>performAction('+')}>+</button>
            <button className="operationFont" type="submit" data-testid="subtractButton" onClick={()=>performAction('-')} >-</button>
            <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={()=>performAction('*')}>*</button>
            <button className="operationFont" type="submit" data-testid="divideButton" onClick={()=>performAction('/')}>/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" data-testid="resetButton" className="outline danger" 
            onClick={()=>reset() }>Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              {result !== null && 
                <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {result}</div>
              }
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}