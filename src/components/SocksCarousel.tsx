import SockCard from "@/components/SockCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function SocksCarousel() {
  return (
    <Carousel className="w-1/2">
      <CarouselContent>
        <CarouselItem>
          <SockCard sockName="Chaussettes chopes" sockImage="/sockBiere.jpg" />
        </CarouselItem>
        <CarouselItem>
          <SockCard sockName="Le nain" sockImage="/nain.png" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
