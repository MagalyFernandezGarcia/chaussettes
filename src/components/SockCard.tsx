import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SockCard({
  sockName,
  sockImage,
}: {
  sockName: string;
  sockImage: string;
}) {
  return (
    <Card className="flex bg-amber-300 items-center">
      <CardHeader className="flex w-full justify-center pb-4">
        <CardTitle className="text-2xl">{sockName}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={sockImage} alt="Chaussette" className="w-100 " />
      </CardContent>
      <CardFooter className="flex justify-center">
        <CardAction>Vote</CardAction>
      </CardFooter>
    </Card>
  );
}
