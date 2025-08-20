import SockCard from "@/components/SockCard";
import { imagesImport } from "@/getImages";
import type { SockType } from "@/types/socksType";

export default function DisplayGallery({
  socksArray,
}: {
  socksArray: SockType[];
}) {
  return (
    <>
      {socksArray.map((sock) => (
        <SockCard
          sockName={sock.name}
          sockImage={imagesImport[sock.image]}
          small
        />
      ))}
    </>
  );
}
