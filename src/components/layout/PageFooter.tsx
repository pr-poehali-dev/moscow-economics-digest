
import { Separator } from "@/components/ui/separator";

const PageFooter = () => {
  return (
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
        <p className="text-blue-300 text-sm">© {new Date().getFullYear()} Департамент экономической политики г. Москвы. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default PageFooter;
