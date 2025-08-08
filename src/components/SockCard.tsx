import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SockCard() {
  return (
    <Card>
      <CardHeader className="flex justify-center pb-4">
        <CardTitle className="text-2xl">Nom de la chaussette</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src="/sockBiere.jpg"
          alt="Chaussette"
          className="w-100 border  border-black p-4"
        />
      </CardContent>
    </Card>
  );
}
