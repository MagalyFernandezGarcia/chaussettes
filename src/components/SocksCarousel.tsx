import SockCard from "@/components/SockCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { imagesImport } from "@/getImages";
import type { SockType } from "@/types/socksType";

import { useEffect, useState } from "react";

export default function SocksCarousel() {
  const [socks, setSocks] = useState<SockType[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/socks")
      .then((res) => res.json())
      .then((data) => setSocks(data));
  }, []);

  const sockCards = socks.map((sock) => (
    <CarouselItem key={sock.id}>
      <SockCard sockName={sock.name} sockImage={imagesImport[sock.image]} />
    </CarouselItem>
  ));
  return (
    <Carousel className="w-1/2">
      <CarouselContent>{sockCards}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
