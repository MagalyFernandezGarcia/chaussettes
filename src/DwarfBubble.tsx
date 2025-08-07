export default function DwarfBubble() {
  return (
    <div className="flex flex-col w-120">
      <div className="relative bg-white text-black p-4 rounded-xl shadow-lg w-fit self-end">
        <div className="text-2xl ml">Chaussettes !!!</div>
        <div className="absolute -bottom-1 left-1 w-4 h-4 bg-white rotate-70"></div>
      </div>
      <img src="/nain.png" className="w-100" />
    </div>
  );
}
