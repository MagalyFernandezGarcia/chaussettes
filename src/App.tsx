import { Route, Routes } from "react-router";
import DwarfBubble from "./components/DwarfBubble";
import Gallery from "@/components/Gallery";
import Cemetery from "@/components/Cemetery";

function App() {
  return (
    <main className="h-full bg-amber-400 justify-center items-center flex">
      <Routes>
        <Route path="/" element={<DwarfBubble />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="cemetery" element={<Cemetery />} />
      </Routes>
    </main>
  );
}

export default App;
