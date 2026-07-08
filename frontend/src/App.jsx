import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-400 opacity-30 blur-3xl"></div>

      <div className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full bg-violet-500 opacity-30 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-500 opacity-20 blur-3xl"></div>

      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      <div className="relative z-10 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
