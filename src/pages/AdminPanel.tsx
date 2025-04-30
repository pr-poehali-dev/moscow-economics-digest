
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Plus } from "lucide-react";
import MoscowEconomyHeader from "@/components/MoscowEconomyHeader";
import PageFooter from "@/components/layout/PageFooter";
import NewsForm, { NewsFormData } from "@/components/admin/NewsForm";
import NewsList from "@/components/admin/NewsList";
import { NewsItem } from "@/types/news";
import { formatDateRu } from "@/utils/dateFormatter";

// Исходные данные для демонстрации
const initialNewsList: NewsItem[] = [
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
];

const AdminPanel = () => {
  const { toast } = useToast();
  const [newsList, setNewsList] = useState<NewsItem[]>(initialNewsList);

  const handleCreateNews = (formData: NewsFormData) => {
    const newNews: NewsItem = {
      id: Date.now(),
      date: formatDateRu(),
      ...formData
    };

    setNewsList([newNews, ...newsList]);
  };

  const handleDeleteNews = (id: number) => {
    setNewsList(newsList.filter(news => news.id !== id));
    toast({
      title: "Успешно",
      description: "Новость успешно удалена",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MoscowEconomyHeader />
      
      <main className="container px-4 py-8 mx-auto max-w-6xl flex-grow">
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
                <NewsForm onNewsCreate={handleCreateNews} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="manage">
            <NewsList 
              newsList={newsList} 
              onDelete={handleDeleteNews} 
            />
          </TabsContent>
        </Tabs>
      </main>
      
      <PageFooter />
    </div>
  );
};

export default AdminPanel;
