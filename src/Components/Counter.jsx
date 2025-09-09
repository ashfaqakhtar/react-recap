import React, { useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);
  const [activeBtn, setActiveBtn] = useState(""); 

  const handleClick = (type) => {
    setActiveBtn(type);

    if (type === "inc") setCounter(count + 1);
    else if (type === "dec") setCounter(count > 0 ? count - 1 : 0);
    else if (type === "reset") setCounter(0);

    setTimeout(() => setActiveBtn(""), 200);
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen gap-6">
      <h1 className="text-3xl font-bold text-orange-500 text-center">
        This is a Counter App !!
      </h1>

      <p className="text-xl transition-colors duration-300">
        Here is your Number:{" "}
        <span
          className={`${
            count > 0 ? "text-green-500" : count === 0 ? "text-gray-500" : ""
          }`}
        >
          {count}
        </span>
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => handleClick("inc")}
          className={`px-6 py-3 rounded-md font-medium text-white transition-transform duration-200 ${
            activeBtn === "inc" ? "bg-red-700 scale-105" : "bg-red-500"
          }`}
        >
          Increment +
        </button>

        <button
          onClick={() => handleClick("dec")}
          className={`px-6 py-3 rounded-md font-medium text-white transition-transform duration-200 ${
            activeBtn === "dec" ? "bg-green-700 scale-105" : "bg-green-500"
          }`}
        >
          Decrement -
        </button>

        <button
          onClick={() => handleClick("reset")}
          className={`px-6 py-3 rounded-md font-medium text-white transition-transform duration-200 ${
            activeBtn === "reset" ? "bg-yellow-600 scale-105" : "bg-yellow-500"
          }`}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
