
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import MoscowEconomyHeader from "@/components/MoscowEconomyHeader"
import TariffNews from "@/components/TariffNews"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Filter, CalendarIcon } from "lucide-react"
import { Link } from "react-router-dom"

const TariffDigest = () => {
  const latestNews = [
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

  return (
    <div className="min-h-screen bg-gray-50">
      <MoscowEconomyHeader />
      
      <main className="container px-4 py-8 mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-1">
              <ChevronLeft size={16} />
              На главную
            </Button>
          </Link>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter size={16} />
              Фильтры
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <CalendarIcon size={16} />
              Календарь
            </Button>
          </div>
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Дайджест событий тарифного регулирования</h1>
          <p className="text-gray-600 text-lg">
            Актуальная информация о тарифном регулировании в России и Москве
          </p>
        </div>
        
        <Card className="mb-10">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 pb-4">
            <CardTitle className="text-2xl text-blue-800">Главное событие</CardTitle>
            <CardDescription>Обновлено: 30 апреля 2025</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-2 flex gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700">ФАС России</Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700">Тарифная политика</Badge>
            </div>
            <h2 className="text-xl font-semibold mb-3">Правительство утвердило прогноз долгосрочного социально-экономического развития до 2036 года</h2>
            <p className="text-gray-700 mb-4">
              Правительством РФ утвержден прогноз долгосрочного социально-экономического развития страны до 2036 года, 
              включающий основные параметры динамики регулируемых тарифов на услуги инфраструктурных компаний.
            </p>
            <p className="text-gray-700">
              Согласно документу, индексация тарифов на электроэнергию, газ и железнодорожные перевозки будет 
              осуществляться по принципу "инфляция минус", что должно способствовать сдерживанию роста цен и 
              повышению эффективности регулируемых отраслей.
            </p>
          </CardContent>
        </Card>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Последние новости</h2>
          <Separator className="mb-6" />
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map(news => (
              <TariffNews key={news.id} news={news} />
            ))}
          </div>
        </div>
        
        <div className="mt-10 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Аналитика и прогнозы</h2>
          <Separator className="mb-6" />
          
          <Card className="mb-6">
            <CardContent className="pt-6">
              <p className="font-medium text-blue-700 mb-2">29 апреля 2025</p>
              <h3 className="text-xl font-semibold mb-3">Влияние новой тарифной политики на развитие экономики Москвы</h3>
              <p className="text-gray-700 mb-4">
                Аналитический центр при Правительстве Москвы опубликовал исследование о влиянии изменений в 
                тарифном регулировании на ключевые отрасли городской экономики и инвестиционный климат.
              </p>
              <Button variant="outline">Подробнее</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <p className="font-medium text-blue-700 mb-2">26 апреля 2025</p>
              <h3 className="text-xl font-semibold mb-3">Прогноз тарифной нагрузки на бизнес в 2025-2026 годах</h3>
              <p className="text-gray-700 mb-4">
                Эксперты Московской торгово-промышленной палаты составили прогноз динамики тарифной нагрузки 
                на малый и средний бизнес в столице на ближайшие два года.
              </p>
              <Button variant="outline">Подробнее</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="bg-blue-900 text-white py-8">
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
  )
}

export default TariffDigest
