import DisplayGallery from "@/components/DisplayGallery";
import { socksArray } from "@/db";
import { Link } from "react-router";

export default function Gallery() {
  const aliveSocks = socksArray.filter((sock) => sock.alive === true);
  return (
    <div className="flex flex-col ">
      <Link to="/" className="pt-20 pl-10">
        Home
      </Link>
      <section className="flex flex-wrap justify-center gap-4 h-screen overflow-y-scroll pt-10 pb-10">
        <DisplayGallery socksArray={aliveSocks} />
      </section>
    </div>
  );
}
