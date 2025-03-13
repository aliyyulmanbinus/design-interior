import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarSrc: string
}

export function TestimonialCard({ quote, author, role, avatarSrc }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          <Star className="h-5 w-5 fill-primary text-primary" />
          <Star className="h-5 w-5 fill-primary text-primary" />
          <Star className="h-5 w-5 fill-primary text-primary" />
          <Star className="h-5 w-5 fill-primary text-primary" />
          <Star className="h-5 w-5 fill-primary text-primary" />
        </div>
        <blockquote className="mb-6 italic">"{quote}"</blockquote>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={avatarSrc} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

