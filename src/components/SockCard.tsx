import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SockCard({
  sockName,
  sockImage,
  small,
}: {
  sockName: string;
  sockImage: string;
  small?: boolean;
}) {
  return (
    <Card className="flex bg-amber-300 items-center  ">
      <CardHeader className="flex w-full justify-center pb-4">
        <CardTitle className="text-2xl">{sockName}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={sockImage}
          alt="Chaussette"
          className={` ${small ? "w-60 hover:scale-210" : "w-100"}`}
        />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
