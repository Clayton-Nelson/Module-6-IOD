import React from "react";
import { useState } from "react";

function Math(input1, input2, operator) {
    let answer = null;
    switch (operator) {
        case "+":
          answer = input1 + input2;
          break;
        case "-":
          answer = input1 - input2;
          break;
        case "*":
          answer = input1 * input2;
          break;
        case "/":
          answer = input1 / input2;
          break;
        default:
          return null;
      }
    return answer;
}

function Calculator() {
    const [operator, ChangeOperator] = useState('+');

    const [input1, ChangeInput1] = useState('');

    const [input2, ChangeInput2] = useState('');

    const [answer, ChangeAnswer] = useState('Please enter an equation')

    const numInput1 = parseFloat(input1);

    const numInput2 = parseFloat(input2);

    const checkInputs = () => {
        if (!numInput1) {
            throw new Error("Input1 needs to be filled")
        } else if (!numInput2) {
            throw new Error("Input2 needs to be filled")
        } else {
            ChangeAnswer(Math(numInput1, numInput2, operator));
        }
    }

    const reset = () => {
        ChangeOperator('+')
        ChangeInput1('')
        ChangeInput2('')
        ChangeAnswer('Please enter an equation')
    }
    return (
        <>
        <div className="answer">
            <h2>Answer: {answer}</h2>
        </div>
        <h3>Current Operator: {operator}</h3>
        <div className="inputs">
        <label htmlFor="input1">Input 1:</label>
        <input
          type="number"
          id="input1"
          name="input1"
          placeholder="Enter the first number"
          value={input1}
          onChange={(e) => ChangeInput1(e.target.value)}
        />
        <label htmlFor="input2">Input 2:</label>
        <input
          type="number"
          id="input2"
          name="input2"
          placeholder="Enter the second number"
          value={input2}
          onChange={(e) => ChangeInput2(e.target.value)}
        />
        </div>
        <div className="operator-buttons">
            <button onClick={() => ChangeOperator("+")}>+</button>
            <button onClick={() => ChangeOperator("-")}>-</button>
            <button onClick={() => ChangeOperator("*")}>*</button>
            <button onClick={() => ChangeOperator("/")}>/</button>
        </div>
        <div className="submit-reset-buttons">
            <button onClick={checkInputs}>Submit</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}

export default Calculator;