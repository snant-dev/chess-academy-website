import "../../styles/carrouselImageAnimation.css";

export const CarrouselImage = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="carrousel-image-animation h-[90vh] bg-cover bg-center object-cover w-full block -z-10" />
    )
}