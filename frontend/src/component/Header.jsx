import React from "react";

const categories = ["length", "weight", "temperature"];

const Header = ({ category, setCategory }) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-black tracking-tight text-white">
        Unit Converter
      </h1>

      <p className="text-white/70 mt-3">Fast • Accurate • Simple</p>

      <div className="flex justify-center gap-4 mt-10">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`capitalize px-6 py-2 rounded-full transition-all duration-300 font-semibold

${
  category === item
    ? "bg-white text-indigo-700 shadow-lg scale-105"
    : "text-white bg-white/10 hover:bg-white/20"
}

`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
