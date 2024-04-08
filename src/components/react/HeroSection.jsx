import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import { CarrouselImage } from "./CarrouselImage";

export const HeroSection = ({ carrouselImages }) => {
  const [indexImage, setIndexImage] = useState(
    Math.floor(Math.random() * carrouselImages.length)
  );
  const idInterval = useRef(null);
  useEffect(() => {
    idInterval.current = setInterval(() => {
      setIndexImage((prevState) => (prevState + 1) % carrouselImages.length);
    }, 5000);

    return () => {
      clearInterval(idInterval.current);
    };
  }, []);

  const handleNextImage = (nextStep) => {
    if (indexImage + nextStep < 0) {
      nextStep = carrouselImages.length - 1;
    }
    setIndexImage((indexImage + nextStep) % carrouselImages.length);
  };

  return (
    <section className="relative h-[90vh]">
      <CarrouselImage
        key={carrouselImages[indexImage].src}
        alt="Imágenes de niños, jovenes, adultos y ancianos disfrutando del ajedrez"
        src={carrouselImages[indexImage].src}
      />
      {/* <div className="hidden sm:block absolute top-1/2 text-4xl left-8 py-1 z-10"> */}
      <div className="hidden absolute top-1/2 text-4xl left-8 py-1 z-10">
        <Button
          onPress={() => handleNextImage(-1)}
          isIconOnly
          aria-label="Siguiente foto"
          className="bg-white/15 border-white/15 hover:cursor-pointer"
        >
          <FaChevronLeft />
        </Button>
      </div>
      {/* <div className="hidden sm:block absolute top-1/2 text-4xl right-8 py-1 z-10"> */}
      <div className="hidden absolute top-1/2 text-4xl right-8 py-1 z-10">
        <Button
          onPress={() => handleNextImage(1)}
          isIconOnly
          aria-label="Anterior foto"
          className="bg-white/15 border-white/15 hover:cursor-pointer"
        >
          <FaChevronRight />
        </Button>
      </div>

      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 bg-gradient-to-r"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Academia de Ajedrez
            <strong className="block font-extrabold text-[#ff8c00c2]">
              Caminos
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Desarrolla tu genio estratégico desde cualquier lugar del mundo con
            nuestras lecciones magistrales y entrenamiento personalizado.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-[#ff8c00c2] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#ff8c00e8] focus:outline-none focus:ring active:bg-[#ff8c00c2] sm:w-auto"
            >
              Inscribirme
            </a>

            <a
              href="/#adventure"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#ff8c00c2] shadow hover:text-[#ff8c00e8] focus:outline-none focus:ring active:text-[#ff8c00c2] sm:w-auto"
            >
              Saber Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
