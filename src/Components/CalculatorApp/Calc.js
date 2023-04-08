import React, { useEffect, useState } from "react";

function Calc() {
  const [addNums, setAddNums] = useState([]);
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [total, setTotal] = useState();
  const [operator, setOperator] = useState("");

  const selectOperator = { plus: "+", minus: "-", divide: "/", multi: "*" };

  const handlePlus = () => {
    if (firstValue.length <= 0 && addNums.length !== 0) {
      const addValue = addNums.join("");
      setFirstValue([parseInt(addValue)]);
      setAddNums([]);
      setOperator(selectOperator.plus);
    }
  };

  const handleMinus = () => {
    if (firstValue.length <= 0 && addNums.length !== 0) {
      const addValue = addNums.join("");
      setFirstValue([parseInt(addValue)]);
      setAddNums([]);
      setOperator(selectOperator.minus);
    }
  };
  const handleMulti = () => {
    if (firstValue.length <= 0 && addNums.length !== 0) {
      const addValue = addNums.join("");
      setFirstValue([parseInt(addValue)]);
      setAddNums([]);
      setOperator(selectOperator.multi);
    }
  };
  const handleDiv = () => {
    if (firstValue.length <= 0 && addNums.length !== 0) {
      const addValue = addNums.join("");
      setFirstValue([parseInt(addValue)]);
      setAddNums([]);
      setOperator(selectOperator.divide);
    }
  };

  useEffect(() => {
    if (firstValue.length > 0) {
      const addValue = addNums.join("");

      setSecondValue([...firstValue, parseInt(addValue)]);
    }
  }, [addNums, firstValue]);

  const handleEqualTo = () => {
    if (operator === "+") {
      if (secondValue.length >= 2) {
        const tot = secondValue.reduce((a, b) => a + b);
        setTotal(tot);
        setAddNums([]);
        setFirstValue("");
      }
    } else if (operator === "-") {
      if (secondValue.length >= 2) {
        const tot = secondValue.reduce((a, b) => a - b);
        setTotal(tot);
        setAddNums([]);
        setFirstValue("");
      }
    } else if (operator === "*") {
      if (secondValue.length >= 2) {
        const tot = secondValue.reduce((a, b) => a * b);
        setTotal(tot);
        setAddNums([]);
        setFirstValue("");
      }
    } else if (operator === "/") {
      if (secondValue.length >= 2) {
        const tot = secondValue.reduce((a, b) => a / b);
        setTotal(tot);
        setAddNums([]);
        setFirstValue("");
      }
    }
    setOperator("");
  };

  const handleClear = () => {
    setTotal(0);
  };

  return (
    <div>
      <div>{firstValue}</div>
      <div>{operator}</div>
      <div>{addNums}</div>
      <div>{total}</div>
      <div>
        <button value={"+"} onClick={handlePlus}>
          +
        </button>
        <button value={"-"} onClick={handleMinus}>
          -
        </button>
        <button value={"*"} onClick={handleMulti}>
          *
        </button>
        <button value={"/"} onClick={handleDiv}>
          /
        </button>
        <button onClick={handleClear}>Clear</button>
        <div>
          <button onClick={() => setAddNums([...addNums, 1])}>1</button>
          <button onClick={() => setAddNums([...addNums, 2])}>2</button>
          <button onClick={() => setAddNums([...addNums, 3])}>3</button>
          <button onClick={() => setAddNums([...addNums, 4])}>4</button>
          <button onClick={() => setAddNums([...addNums, 5])}>5</button>
          <button onClick={() => setAddNums([...addNums, 6])}>6</button>
          <button onClick={() => setAddNums([...addNums, 7])}>7</button>
          <button onClick={() => setAddNums([...addNums, 8])}>8</button>
          <button onClick={() => setAddNums([...addNums, 9])}>9</button>
          <button onClick={() => setAddNums([...addNums, 0])}>0</button>
        </div>
        <div>
          <button onClick={handleEqualTo}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
