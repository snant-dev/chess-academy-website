import "../../styles/carrouselImageAnimation.css";

export const CarrouselImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute carrousel-image-animation h-full bg-cover bg-center object-cover w-full block -z-10"
    />
  );
};
