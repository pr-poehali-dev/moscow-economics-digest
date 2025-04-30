
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 color-black text-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600 mb-6">Информационно-аналитический портал "Экономика Москвы"</p>
        <Link to="/tariff-digest">
          <Button className="bg-blue-700 hover:bg-blue-800">
            Открыть дайджест событий тарифного регулирования
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
