import { imagesImport } from "@/getImages";
import { socksArray } from "@/db";

import SockCard from "@/components/SockCard";

export default function Gallery() {
  return (
    <section className="flex flex-wrap justify-center gap-4 h-screen overflow-y-scroll pt-20 pb-10">
      {socksArray.map((sock) => (
        <SockCard sockName={sock.name} sockImage={imagesImport[sock.image]} />
      ))}
    </section>
  );
}
