
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface TariffNewsProps {
  news: {
    id: number;
    date: string;
    title: string;
    category: string;
    description: string;
    source: string;
  }
}

const TariffNews = ({ news }: TariffNewsProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="text-sm text-gray-500 mb-2">{news.date}</div>
        <div className="mb-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            {news.category}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold mb-3">{news.title}</h3>
        <p className="text-gray-700 mb-3 text-sm">
          {news.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500">{news.source}</span>
          <button className="text-blue-700 hover:text-blue-900 flex items-center text-sm font-medium">
            Читать
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

export default TariffNews
