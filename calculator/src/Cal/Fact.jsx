import React, { useState } from "react";

function Calcut() {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState(null);
    const [method, setMethod] = useState("");

    // Iterative factorial
    const calculateIterative = () => {
        if (!isValidInput(number)) return;
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        setResult(fact);
        setMethod("Iterative");
    };

    // Recursive factorial
    const calculateRecursive = () => {
        if (!isValidInput(number)) return;
        const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
        setResult(factorial(number));
        setMethod("Recursive");
    };

    // Input validation
    const isValidInput = (num) => {
        if (num === "" || isNaN(num) || num < 0 || !Number.isInteger(Number(num))) {
            alert("Please enter a valid positive integer.");
            setResult(null);
            setMethod("");
            return false;
        }
        return true;
    };

    return (
        <div className=" flex items-center justify-center m-5 mb-10">
            <div className="bg-white/90 shadow-3xl rounded-3xl shadow-lg px-8 pt-6 pb-8 w-96">
                <h1 className="text-2xl font-bold mb-4 text-center">Factorial Calculator</h1>
                <div className="mb-4">
                    <label
                        htmlFor="number"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Enter a positive integer:
                    </label>
                    <input
                        type="text"
                        id="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter a number"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        onClick={calculateIterative}
                        className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Iterative
                    </button>
                    <button
                        onClick={calculateRecursive}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Recursive
                    </button>
                </div>

                <div className="mt-4 border rounded px-2"> 
                    <h3 className="text-lg font-bold text-gray-700">Result:</h3>

                    {result !== null && (
                        <div className="">

                            <p className="text-gray-800">
                                Factorial of {number} ({method} method): <b>{result}</b>
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Calcut;
