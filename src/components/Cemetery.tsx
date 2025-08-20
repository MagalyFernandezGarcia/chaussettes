import DisplayGallery from "@/components/displayGallery";
import { socksArray } from "@/db";
import { Link } from "react-router";

export default function Cemetery() {
  const deadSocks = socksArray.filter((sock) => !sock.alive);
  return (
    <div className="flex flex-col gap-10 ">
      <Link to="/" className="pt-20 ">
        Home
      </Link>
      <section>
        <DisplayGallery socksArray={deadSocks} />
      </section>
    </div>
  );
}
