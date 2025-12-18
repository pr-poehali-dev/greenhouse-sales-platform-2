import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const greenhouses = [
    {
      name: 'Стрелка',
      profile: '25/25',
      width: '3м',
      lengths: [4, 6, 8, 10],
      priceFrom: 23000,
      step: '0.65м / 1м'
    },
    {
      name: 'Домик',
      profile: '20/20',
      width: '3м',
      lengths: [4, 6, 8, 10],
      priceFrom: 31000,
      step: '0.65м / 1м'
    },
    {
      name: 'Кремлевская сказка',
      profile: '20/20',
      width: '3м',
      lengths: [4, 6, 8, 10],
      priceFrom: 31000,
      step: '0.65м / 1м'
    },
    {
      name: 'Урожайная',
      profile: '25/25',
      width: '3м',
      lengths: [4, 6, 8, 10],
      priceFrom: 20000,
      step: '0.65м / 1м'
    },
    {
      name: 'Радость',
      profile: '20/30',
      width: '3м',
      lengths: [4, 6, 8, 10],
      priceFrom: 22000,
      step: '0.65м / 1м'
    },
    {
      name: 'Волжанка',
      profile: '20/40',
      width: '3м',
      lengths: [4, 6, 8, 10],
      priceFrom: 21000,
      step: '0.65м / 1м'
    }
  ];

  const polycarbonate = [
    { name: 'Поликарбонат 4мм', description: 'Стандартный прозрачный' },
    { name: 'Поликарбонат 6мм', description: 'Усиленный прозрачный' },
    { name: 'Поликарбонат 6мм цветной', description: 'Усиленный с оттенком' },
    { name: 'Поликарбонат 8мм', description: 'Максимальная прочность' },
    { name: 'Поликарбонат 8мм цветной', description: 'Максимальная прочность с оттенком' }
  ];

  const accessories = [
    { name: 'Торцевые вставки', description: 'Для 4мм, 6мм, 8мм' },
    { name: 'Соединительный профиль', description: 'Для 4мм, 6мм, 8мм' },
    { name: 'Термошайбы', description: 'Цветные и прозрачные' }
  ];

  const gazebos = [
    {
      name: 'Пион',
      description: 'Сварной элемент беседки - 3 шт; соединительные перемычки - 6 шт; Доска 25×200×2000 - 12 шт; Поликарбонат - 6 метров',
      priceFrom: 18000,
      includes: ['Саморез со сверлом 72 шт', 'Болт мебельный 18 шт', 'Гайка 18 шт', 'Грунтозацепы 4 шт']
    },
    {
      name: 'Астра',
      description: 'Размер: ширина по основанию 1.73м, ширина по верху 2.43м, высота 2.02м, длина 1.9м',
      priceFrom: 18000,
      includes: ['Каркас: труба 40×20 мм', 'Столешница и скамьи: обрезная доска', 'Покрытие: сотовый поликарбонат']
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Теплицы</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Теплицы', 'Поликарбонат', 'Беседки', 'Автонавесы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="outline" size="icon">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      <section id="главная" className="py-20 md:py-32 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Теплицы для богатого урожая
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Качественные теплицы, беседки и автонавесы. Прочный каркас, надежная конструкция, доступные цены.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('теплицы')}>
                <Icon name="Leaf" size={20} className="mr-2" />
                Выбрать теплицу
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('контакты')}>
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="теплицы" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Каталог теплиц</h2>
            <p className="text-gray-600 text-lg">Выберите модель под ваши потребности</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {greenhouses.map((greenhouse) => (
              <Card key={greenhouse.name} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Home" size={24} className="text-primary" />
                    {greenhouse.name}
                  </CardTitle>
                  <CardDescription>Профиль {greenhouse.profile}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Ширина:</span>
                      <span className="font-medium">{greenhouse.width}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Длина:</span>
                      <span className="font-medium">{greenhouse.lengths.join(', ')}м</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Шаг:</span>
                      <span className="font-medium">{greenhouse.step}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-gray-600">от</span>
                      <span className="text-3xl font-bold text-primary">{greenhouse.priceFrom.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="поликарбонат" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Поликарбонат и комплектующие</h2>
            <p className="text-gray-600 text-lg">Все необходимое для вашей теплицы</p>
          </div>
          <Tabs defaultValue="polycarbonate" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="polycarbonate">Поликарбонат</TabsTrigger>
              <TabsTrigger value="accessories">Комплектующие</TabsTrigger>
            </TabsList>
            <TabsContent value="polycarbonate" className="space-y-4 mt-6">
              {polycarbonate.map((item) => (
                <Card key={item.name}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="Layers" size={20} className="text-primary" />
                      {item.name}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="accessories" className="space-y-4 mt-6">
              {accessories.map((item) => (
                <Card key={item.name}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="Wrench" size={20} className="text-primary" />
                      {item.name}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="беседки" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Беседки</h2>
            <p className="text-gray-600 text-lg">Комфортный отдых на свежем воздухе</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {gazebos.map((gazebo) => (
              <Card key={gazebo.name} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Icon name="Tent" size={28} className="text-primary" />
                    {gazebo.name}
                  </CardTitle>
                  <CardDescription className="text-base">{gazebo.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">В комплекте:</p>
                    <ul className="space-y-1">
                      {gazebo.includes.map((item) => (
                        <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-gray-600">от</span>
                      <span className="text-3xl font-bold text-primary">{gazebo.priceFrom.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="автонавесы" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Автонавесы</h2>
            <p className="text-gray-600 text-lg">Защита вашего автомобиля от непогоды</p>
          </div>
          <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Icon name="Car" size={28} className="text-primary" />
                Автонавес стандарт
              </CardTitle>
              <CardDescription className="text-base">Надежная защита для вашего автомобиля</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Ширина</p>
                  <p className="text-lg font-medium">3.5м</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Высота</p>
                  <p className="text-lg font-medium">2.6м</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Длина</p>
                  <p className="text-lg font-medium">от 4м</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Цена</p>
                  <p className="text-lg font-bold text-primary">от 22 000 ₽</p>
                </div>
              </div>
              <Button className="w-full" size="lg">
                <Icon name="ShoppingCart" size={18} className="mr-2" />
                Заказать навес
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты и доставка</h2>
              <p className="text-gray-600 text-lg">Свяжитесь с нами любым удобным способом</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" size={24} className="text-primary" />
                    Связаться с нами
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={20} className="text-gray-400" />
                      <span className="text-gray-700">info@teplicy.ru</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={20} className="text-gray-400" />
                      <span className="text-gray-700">+7 (999) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={20} className="text-gray-400" />
                      <span className="text-gray-700">г. Самара, ул. Садовая, 25</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Написать в WhatsApp
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Truck" size={24} className="text-primary" />
                    Доставка
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">По городу</p>
                        <p className="text-sm text-gray-600">Бесплатно при заказе от 20 000 ₽</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">По области</p>
                        <p className="text-sm text-gray-600">Рассчитывается индивидуально</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Сборка</p>
                        <p className="text-sm text-gray-600">Профессиональная установка</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" size={28} className="text-primary" />
              <span className="text-xl font-bold">Теплицы</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Все права защищены</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
