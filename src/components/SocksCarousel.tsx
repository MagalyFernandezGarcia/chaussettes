import SockCard from "@/components/SockCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { imagesImport } from "@/getImages";
import { socksArray } from "@/db";

export default function SocksCarousel() {
  const sockCards = socksArray.map((sock) => (
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
