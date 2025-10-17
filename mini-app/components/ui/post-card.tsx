import { Card, CardHeader, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { Heart, Share2 } from "lucide-react";

export function PostCard({
  title,
  image,
  description,
  author,
  likes,
}: {
  title: string;
  image: string;
  description: string;
  author: string;
  likes?: number;
}) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <img src={image} alt={title} className="w-full rounded-md" />
        <p className="mt-2 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Heart className="h-4 w-4 text-red-500" />
          <span>{likes ?? 0}</span>
        </div>
        <Button variant="ghost" size="sm" className="gap-1">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
