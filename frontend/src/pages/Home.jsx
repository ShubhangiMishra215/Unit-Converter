import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";

const unitsByCategory = {
  length: [
    "millimeter","centimeter","meter","kilometer","inch","foot","yard","mile",],
  weight: ["milligram", "gram", "kilogram", "ounce", "pound"],
  temperature: ["Celsius", "Fahrenheit", "Kelvin"],
};

const Home = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("length");
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(unitsByCategory.length[0]);
  const [to, setTo] = useState(unitsByCategory.length[1]);

  useEffect(() => {
    setFrom(unitsByCategory[category][0]);
    setTo(unitsByCategory[category][1]);
  }, [category]);

  async function handleConvert() {
    if (!value) {
      alert("Please enter a value");
      return;
    }

    try {
      const response = await fetch("https://unit-converter-gs3c.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          value,
          from,
          to,
        }),
      });

      const data = await response.json();

      navigate("/result", {
        state: {
          category,
          value,
          from,
          to,
          result: data.result,
        },
      });
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-5">
      <div
        className="w-full max-w-xl rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.4)]     p-10
      "
      >
        <Header category={category} setCategory={setCategory} />

        <div className="mt-10 space-y-6">
          {/* Value */}
          <div>
            <label className="block text-white font-medium mb-2">
              Enter Value
            </label>

            <input
              type="number"
              placeholder="Enter value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="
              w-full
              rounded-xl
              bg-white/15
              border
              border-white/20
              px-5
              py-4
              text-white
              placeholder:text-white/50
              outline-none
              transition
              focus:ring-4
              focus:ring-cyan-400/30
              focus:border-cyan-400
            "
            />
          </div>

          {/* From */}
          <div>
            <label className="block text-white font-medium mb-2">
              Convert From
            </label>

            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="
              w-full
              rounded-xl
              bg-white/15
              border
              border-white/20
              px-5
              py-4
              text-white
              outline-none
              focus:ring-4
              focus:ring-cyan-400/30
              focus:border-cyan-400
            "
            >
              {unitsByCategory[category].map((unit) => (
                <option
                  key={unit}
                  value={unit}
                  className="text-black"
                >
                  {unit}
                </option>
              ))}
            </select>
          </div>

          {/* To */}
          <div>
            <label className="block text-white font-medium mb-2">
              Convert To
            </label>

            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="
              w-full
              rounded-xl
              bg-white/15
              border
              border-white/20
              px-5
              py-4
              text-white
              outline-none
              focus:ring-4
              focus:ring-cyan-400/30
              focus:border-cyan-400
            "
            >
              {unitsByCategory[category].map((unit) => (
                <option
                  key={unit}
                  value={unit}
                  className="text-black"
                >
                  {unit}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleConvert}
            className="
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-indigo-600
            text-white
            font-bold
            text-lg
            shadow-lg
            hover:scale-105
            hover:shadow-cyan-500/40
            transition-all
            duration-300
          "
          >
            Convert →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;