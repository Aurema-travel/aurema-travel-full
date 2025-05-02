import { useState } from "react";

export default function AuremaTravelLanding() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });
  const [showThankYou, setShowThankYou] = useState(false);

  const tours = [
    { country: "Грузия", image: "/georgia.jpg" },
    { country: "Португалия", image: "/portugal.jpg" },
    { country: "Италия", image: "/italy.jpg" },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    setTimeout(() => {
      setSelectedTour(null);
      setFormData({ name: "", email: "", date: "" });
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 4000);
    }, 500);
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">Aurema Travel</h1>
        <nav className="space-x-4">
          <a href="#tours" className="hover:underline">Туры</a>
          <a href="#about" className="hover:underline">О нас</a>
          <a href="#contact" className="hover:underline">Контакты</a>
        </nav>
      </header>

      <section className="bg-orange-50 py-16 text-center">
        <h2 className="text-4xl font-semibold mb-4">Яркие туры с местными гидами</h2>
        <p className="text-lg mb-6">Легко. Увлекательно. С душой.</p>
        <a href="#tours" className="bg-orange-500 text-white py-2 px-6 rounded-2xl shadow hover:bg-orange-600 inline-block">Найти тур</a>
      </section>

      <section id="tours" className="p-8 bg-white">
        <h3 className="text-2xl font-semibold text-center mb-6">Популярные направления</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tours.map(({ country, image }) => (
            <div key={country} className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={image} alt={country} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-medium mb-2">{country}</h4>
                <button
                  className="bg-orange-500 text-white py-1 px-4 rounded-2xl text-sm hover:bg-orange-600"
                  onClick={() => setSelectedTour(country)}
                >
                  Забронировать
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedTour && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Бронирование тура в {selectedTour}</h3>
            <form
              action="https://formsubmit.co/info@aurematravel.com"
              method="POST"
              target="_blank"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="Новая заявка на тур" />
              <input type="hidden" name="tour" value={selectedTour} />
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="date"
                name="date"
                className="w-full p-2 border rounded"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setSelectedTour(null)} className="text-sm text-gray-600 hover:underline">
                  Отмена
                </button>
                <button type="submit" onClick={handleFormSubmit} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-100 text-green-900 text-2xl font-bold px-10 py-8 rounded-3xl shadow-2xl text-center animate-fade-in-out transition-opacity duration-500">
            Спасибо! Ваша заявка успешно отправлена.
          </div>
        </div>
      )}

      <section id="about" className="bg-orange-100 p-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">О платформе Aurema Travel</h3>
        <p className="max-w-3xl mx-auto text-center">
          Мы создаём пространство для путешествий с душой — с настоящими гидами, душевными маршрутами и вниманием к деталям.
          Наши туры — это не просто поездки, а живые впечатления и новые друзья.
        </p>
      </section>

      <footer id="contact" className="bg-gray-100 p-6 text-center">
        <p className="mb-2">Свяжитесь с нами: info@aurematravel.com</p>
        <p className="text-sm text-gray-500">© 2025 Aurema Travel. Все права защищены.</p>
      </footer>
    </div>
  );
}

