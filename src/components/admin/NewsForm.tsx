
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save } from "lucide-react";

interface NewsFormProps {
  onNewsCreate: (news: NewsFormData) => void;
}

export interface NewsFormData {
  title: string;
  category: string;
  description: string;
  source: string;
}

export const categoryOptions = [
  "Электроэнергетика",
  "ЖКХ",
  "Теплоснабжение",
  "Водоснабжение",
  "Газоснабжение",
  "Транспорт",
  "Общие вопросы"
];

const NewsForm = ({ onNewsCreate }: NewsFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<NewsFormData>({
    title: "",
    category: "Электроэнергетика",
    description: "",
    source: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      category: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.source) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    onNewsCreate(formData);
    
    // Reset form
    setFormData({
      title: "",
      category: "Электроэнергетика",
      description: "",
      source: "",
    });

    toast({
      title: "Успешно",
      description: "Новость успешно добавлена",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Заголовок *
        </label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Введите заголовок новости"
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Категория *
        </label>
        <Select value={formData.category} onValueChange={handleSelectChange}>
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
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Описание *
        </label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Введите текст новости"
          className="min-h-[120px]"
        />
      </div>
      
      <div>
        <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
          Источник *
        </label>
        <Input
          id="source"
          name="source"
          value={formData.source}
          onChange={handleInputChange}
          placeholder="Укажите источник информации"
        />
      </div>
      
      <div className="pt-3">
        <Button type="submit" className="bg-blue-700 hover:bg-blue-800">
          <Save className="mr-2 h-4 w-4" />
          Сохранить новость
        </Button>
      </div>
    </form>
  );
};

export default NewsForm;
