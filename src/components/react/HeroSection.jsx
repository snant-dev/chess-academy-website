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
    <section className="relative">
      <CarrouselImage
        key={carrouselImages[indexImage].src}
        alt="Imágenes de niños, jovenes, adultos y ancianos disfrutando del ajedrez"
        src={carrouselImages[indexImage].src}
      />
      <div className="hidden sm:block absolute top-1/2 text-4xl left-8 py-1 z-10">
        <Button
          onPress={() => handleNextImage(-1)}
          isIconOnly
          aria-label="Siguiente foto"
          className="bg-white/15 border-white/15 hover:cursor-pointer"
        >
          <FaChevronLeft />
        </Button>
      </div>
      <div className="hidden sm:block absolute top-1/2 text-4xl right-8 py-1 z-10">
        <Button
          onPress={() => handleNextImage(1)}
          isIconOnly
          aria-label="Anterior foto"
          className="bg-white/15 border-white/15 hover:cursor-pointer"
        >
          <FaChevronRight />
        </Button>
      </div>
      <div className="absolute top-0 h-full bg-black/25 w-full">
        <div className="container h-full mx-auto">
          <div className="grid grid-cols-12 h-full content-center">
            <div className="col-start-3 col-end-9 xl:col-end-8 text-white">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                <span className="block">Caminos</span>
                <span className="block font-medium text-3xl md:text-4xl xl:text-5xl">
                  Academia de Ajedrez
                </span>
              </h1>
              <p className="mb-6 lg:text-lg">
                Desarrolla tu genio estratégico desde cualquier lugar del mundo
                con nuestras lecciones magistrales y entrenamiento
                personalizado.
              </p>
              <div className="flex gap-4">
                <Button radius="none" variant="solid">
                  Uno
                </Button>
                <Button className="text-white" radius="none" variant="bordered">
                  Dos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
