
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { NewsItem } from "@/types/news";
import { categoryOptions } from "@/components/admin/NewsForm";

interface AdminNewsItemProps {
  news: NewsItem;
  onDelete: () => void;
}

const AdminNewsItem = ({ news, onDelete }: AdminNewsItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: news.title,
    category: news.category,
    description: news.description,
    source: news.source,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleSelectChange = (value: string) => {
    setEditData({
      ...editData,
      category: value,
    });
  };

  const handleCancel = () => {
    setEditData({
      title: news.title,
      category: news.category,
      description: news.description,
      source: news.source,
    });
    setIsEditing(false);
  };

  const handleSave = () => {
    // В реальном приложении здесь был бы API-запрос для обновления новости
    // Для этого примера мы просто выключаем режим редактирования
    setIsEditing(false);
  };

  return (
    <Card className="border-gray-200 hover:border-gray-300 transition-colors">
      <CardContent className="p-4">
        {isEditing ? (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Заголовок</label>
              <Input
                name="title"
                value={editData.title}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Категория</label>
              <Select value={editData.category} onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
              <Textarea
                name="description"
                value={editData.description}
                onChange={handleInputChange}
                className="min-h-[100px]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Источник</label>
              <Input
                name="source"
                value={editData.source}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" size="sm" onClick={handleCancel}>
                <X className="mr-1 h-4 w-4" />
                Отмена
              </Button>
              <Button size="sm" onClick={handleSave}>
                <Check className="mr-1 h-4 w-4" />
                Сохранить
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between">
              <div className="text-sm text-gray-500 mb-2">{news.date}</div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                  <Pencil size={16} />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                      <Trash2 size={16} />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Подтверждение удаления</AlertDialogTitle>
                      <AlertDialogDescription>
                        Вы действительно хотите удалить новость "{news.title}"? Это действие нельзя отменить.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Отмена</AlertDialogCancel>
                      <AlertDialogAction onClick={onDelete} className="bg-red-600 hover:bg-red-700">
                        Удалить
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <div className="mb-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                {news.category}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
            <p className="text-gray-700 text-sm">{news.description}</p>
            <div className="mt-3 text-sm text-gray-500">Источник: {news.source}</div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminNewsItem;
