import React, { useState } from "react";

function Calcu() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Basic Calculator Functions
  const handleAddition = () => setResult(Number(num1) + Number(num2));
  const handleSubtraction = () => setResult(Number(num1) - Number(num2));
  const handleMultiplication = () => setResult(Number(num1) * Number(num2));
  const handleDivision = () => {
    if (num2 === "0") {
      alert("Division by zero is not allowed.");
      setResult(null);
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div className=" flex items-center m-2 justify-center rounded-3xl">
      <div className="bg-white/80 shadow-md rounded-3xl px-8 pt-6 pb-8 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Basic Calculator</h1>

        {/* Input Fields */}
        <div className="mb-4">
          <label
            htmlFor="num1"
            className="block text-gray-700 text-m font-bold mb-2"
          >
            Enter first number:
          </label>
          <input
            type="text"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
            placeholder="Number 1"
          />
          <label
            htmlFor="num2"
            className="block text-gray-700 text-m font-bold mb-2"
          >
            Enter second number:
          </label>
          <input
            type="text"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Number 2"
          />
        </div>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleAddition}
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>

          <button
            onClick={handleSubtraction}
            className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
          >
            Subtract
          </button>
          <button
            onClick={handleMultiplication}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Multiply
          </button>
          <button
            onClick={handleDivision}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Divide
          </button>
        </div>

        {/* Result Display */}
        <div className="mt-4 px-2 border rounded">
          <h3 className="text-lg font-bold text-gray-700">Result:</h3>
          {result !== null && (
            <div className="">

              <p className="text-gray-800 text-center text-xl">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calcu;



