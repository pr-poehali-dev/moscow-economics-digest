
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Plus, Pencil, Trash2, Save } from "lucide-react";
import MoscowEconomyHeader from "@/components/MoscowEconomyHeader";
import AdminNewsItem from "@/components/AdminNewsItem";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: string;
  description: string;
  source: string;
}

const AdminPanel = () => {
  const { toast } = useToast();
  const [newsList, setNewsList] = useState<NewsItem[]>([
    {
      id: 1,
      date: "28 апреля 2025",
      title: "ФАС утвердила новые тарифы на электроэнергию",
      category: "Электроэнергетика",
      description: "Федеральная антимонопольная служба утвердила новые тарифы на электроэнергию для населения с 1 июля 2025 года. Рост составит в среднем 5% по стране.",
      source: "ФАС России"
    },
    {
      id: 2,
      date: "25 апреля 2025",
      title: "Москва установила предельные индексы роста коммунальных тарифов",
      category: "ЖКХ",
      description: "Правительство Москвы установило предельные индексы изменения размера платы граждан за коммунальные услуги на второе полугодие 2025 года на уровне 4,2%.",
      source: "Правительство Москвы"
    },
    {
      id: 3,
      date: "20 апреля 2025",
      title: "Минэнерго предложило пересмотреть методику расчета тарифов на тепло",
      category: "Теплоснабжение",
      description: "Министерство энергетики выступило с инициативой пересмотра методики расчета тарифов на тепловую энергию с учетом климатических особенностей регионов.",
      source: "Минэнерго России"
    }
  ]);

  const [formData, setFormData] = useState({
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

    // Get current date in Russian format
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('ru-RU', options);
    
    const newNews: NewsItem = {
      id: Date.now(),
      date: formattedDate,
      title: formData.title,
      category: formData.category,
      description: formData.description,
      source: formData.source,
    };

    setNewsList([newNews, ...newsList]);
    
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

  const handleDelete = (id: number) => {
    setNewsList(newsList.filter(news => news.id !== id));
    toast({
      title: "Успешно",
      description: "Новость успешно удалена",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MoscowEconomyHeader />
      
      <main className="container px-4 py-8 mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <Link to="/tariff-digest">
            <Button variant="ghost" className="flex items-center gap-1">
              <ChevronLeft size={16} />
              Вернуться к дайджесту
            </Button>
          </Link>
          
          <div className="flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Панель администратора
            </span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Управление новостями тарифного регулирования</h1>
        
        <Tabs defaultValue="create" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="create">Создать новость</TabsTrigger>
            <TabsTrigger value="manage">Управление новостями</TabsTrigger>
          </TabsList>
          
          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus size={18} />
                  Добавить новую публикацию
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                        <SelectItem value="Электроэнергетика">Электроэнергетика</SelectItem>
                        <SelectItem value="ЖКХ">ЖКХ</SelectItem>
                        <SelectItem value="Теплоснабжение">Теплоснабжение</SelectItem>
                        <SelectItem value="Водоснабжение">Водоснабжение</SelectItem>
                        <SelectItem value="Газоснабжение">Газоснабжение</SelectItem>
                        <SelectItem value="Транспорт">Транспорт</SelectItem>
                        <SelectItem value="Общие вопросы">Общие вопросы</SelectItem>
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
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="manage">
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
                        onDelete={() => handleDelete(news.id)} 
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
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-blue-900 text-white py-8 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-3">Экономика Москвы</h3>
              <p className="text-blue-200">Информационно-аналитический портал</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Контакты</h4>
              <p className="text-blue-200">info@economy.moscow.ru</p>
              <p className="text-blue-200">+7 (495) 123-45-67</p>
            </div>
          </div>
          <Separator className="my-6 bg-blue-700" />
          <p className="text-blue-300 text-sm">© 2025 Департамент экономической политики г. Москвы. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminPanel;
