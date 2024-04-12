import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import PiliImg from "../../assets/img/testimonials/pilar_reinoso.jpg";
import GaspiImg from "../../assets/img/testimonials/gaspar_reinoso.jpg";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      avatar: PiliImg.src,
      name: "María Pilar Reinoso",
      title:
        "Licenciada en Turismo, Guía Universitaria y Técnica en Gestión Turística. Estudiante de Licenciatura en Hotelería.",
      quote:
        "El ajedrez modeló, en parte, mi carácter discreto y también impulsó estrategias que luego apliqué en otros ámbitos y decisiones vitales de mi interés. Va más allá del deporte: es una escuela de vida en varios sentidos que me acompañó en mi infancia y me dio fuertes amistades.",
    },
    {
      avatar: GaspiImg.src,
      name: "Gaspar Reinoso",
      title: "Estidiante de Ingenieria en Sistemas",
      quote:
        "Estoy a punto de completar mi carrera de Ingeniería en Sistemas en la Universidad Católica de Córdoba, y estoy emocionado por llevar a cabo mi trabajo de tesis centrado en el ajedrez. Esta práctica ha sido una constante en mi vida y estoy ansioso por contribuir al mundo del ajedrez a través de mi investigación.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-14 dark:bg-gray-800 bg-[#ff8c00c2] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            <span className="block mb-2">Casos de Éxito</span>
            <span className="block text-white">
              Orgullosos de nuestras historias
            </span>
          </h2>
          <div className="bg-white py-8 px-8 sm:py-14 sm:px-14 rounded-xl">
            <ul>
              {testimonials.map((item, idx) =>
                currentTestimonial == idx ? (
                  <li key={idx}>
                    <figure>
                      <blockquote>
                        <p className=" text-gray-600  text-xl font-medium sm:text-2xl relative">
                          <FaQuoteLeft className="hidden sm:block w-10 h-10 absolute sm:w-14 sm:h-14 -top-12 -left-8 fill-[#ff8c00c2]" />
                          {item.quote}
                          <FaQuoteRight className="hidden sm:block w-10 h-10 absolute sm:w-14 sm:h-14 -right-8 fill-[#ff8c00c2]" />
                        </p>
                      </blockquote>
                      <div className="mt-6">
                        <img
                          src={item.avatar}
                          className="w-14 h-14 sm:w-24 sm:h-24 mx-auto rounded-full object-cover"
                        />
                        <div className="mt-3">
                          <span className="block text-gray-800 font-semibold text-large">
                            {item.name}
                          </span>
                          <span className="block text-gray-600 text-sm mt-0.5 max-w-sm mx-auto">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </figure>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-3 justify-center">
              {testimonials.map((_, idx) => (
                <li key={idx}>
                  <button
                    className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-white focus:ring ${
                      currentTestimonial == idx ? "bg-white" : "bg-neutral-300"
                    }`}
                    onClick={() => setCurrentTestimonial(idx)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
