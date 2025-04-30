
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Link } from "react-router-dom"

const MoscowEconomyHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-800 mr-8">
              Экономика Москвы
            </Link>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-800 font-medium">Новости</a>
              <a href="#" className="text-gray-600 hover:text-blue-800 font-medium">Аналитика</a>
              <Link to="/tariff-digest" className="text-blue-800 font-medium border-b-2 border-blue-800 pb-1">Тарифы</Link>
              <a href="#" className="text-gray-600 hover:text-blue-800 font-medium">Инвестиции</a>
              <a href="#" className="text-gray-600 hover:text-blue-800 font-medium">О проекте</a>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="relative rounded-md shadow-sm mr-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                placeholder="Поиск..."
              />
            </div>
            <Link to="/admin">
              <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                Админ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MoscowEconomyHeader
