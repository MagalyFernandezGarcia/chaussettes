import SocksCarousel from "@/components/SocksCarousel";
import { useState } from "react";
import { Link } from "react-router";

export default function DwarfBubble() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {isHovered && (
        <div className="flex justify-end mr-20 mt-20 z-20 relative gap-4">
          <Link to="/gallery">Gallery</Link>
          <Link to="/cemetery">Cemetery</Link>
        </div>
      )}

      <div
        className={`absolute inset-0 z-0 p-10 flex flex-col items-center justify-center transition-all duration-500 ease-in-out`}
      >
        <SocksCarousel />
      </div>

      <div
        className={`absolute z-10 p-6 rounded-lg transition-all duration-500 ease-in-out flex items-center justify-center  bg-amber-400
          ${
            isHovered ? "w-40 h-fit top-4 left-4" : "w-full h-full top-0 left-0"
          }
        `}
      >
        <div className="flex flex-col w-120 ">
          <div
            className={`relative bg-white text-black p-4 rounded-xl shadow-lg transition-all duration-500 ease-in-out  ${
              isHovered ? "hidden" : "self-end"
            }`}
          >
            <div className="text-2xl ml">Chaussettes !!!</div>
            <div className="absolute -bottom-1 left-1 w-4 h-4 bg-white rotate-70"></div>
          </div>
          <img
            src="/nain.png"
            className={`transition-all duration-500 ease-in-out${
              isHovered ? "w-20 self-center" : "w-100"
            }`}
            onMouseEnter={() => setIsHovered((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}
