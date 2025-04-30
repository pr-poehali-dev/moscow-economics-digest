
import { NewsItem } from "@/types/news";
import AdminNewsItem from "@/components/AdminNewsItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil } from "lucide-react";

interface NewsListProps {
  newsList: NewsItem[];
  onDelete: (id: number) => void;
}

const NewsList = ({ newsList, onDelete }: NewsListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Pencil size={18} />
          Список новостей
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsList.length > 0 ? (
            newsList.map((news) => (
              <AdminNewsItem 
                key={news.id} 
                news={news} 
                onDelete={() => onDelete(news.id)} 
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              Список новостей пуст
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsList;
