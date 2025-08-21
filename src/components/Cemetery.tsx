import DisplayGallery from "@/components/displayGallery";
import { socksArray } from "@/db";
import { Link } from "react-router";

export default function Cemetery() {
  const deadSocks = socksArray.filter((sock) => !sock.alive);
  return (
    <div className="flex flex-col gap-10  self-start ">
      <Link to="/" className="pt-20  ">
        Home
      </Link>
      <section>
        {deadSocks.length > 0 ? (
          <DisplayGallery socksArray={deadSocks} />
        ) : (
          <h1 className="text-4xl text-center    ">All socks are alive ! </h1>
        )}
      </section>
    </div>
  );
}
