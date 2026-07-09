import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Fix: navigate as a side effect, not during render
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state) return null;

  const { value, from, to, result, category } = state;

  const resetHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-5">
      <div className="w-full max-w-xl rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.4)] p-10 text-center space-y-6">
        <p className="text-white/70 text-lg">Conversion Result</p>

        <h2 className="text-3xl font-bold text-white">
          {value} {from}
        </h2>

        <div className="text-5xl text-cyan-300">↓</div>

        <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          {result}
        </h1>

        <p className="text-2xl text-white">{to}</p>

        <button
          onClick={resetHandler}
          className="mt-6 w-full py-4 rounded-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition-all duration-300 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Result;
