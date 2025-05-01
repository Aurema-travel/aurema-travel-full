
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
        <button className="bg-orange-500 text-white py-2 px-6 rounded-2xl shadow hover:bg-orange-600">
          Найти тур
        </button>
      </section>
    </div>
  );
}
