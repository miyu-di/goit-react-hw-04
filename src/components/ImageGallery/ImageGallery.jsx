import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export const ImageGallery = ({ images, handleModal }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id} onClick={() => handleModal(image)}>
          <ImageCard key={image.id} item={image} />
        </li>
      ))}
    </ul>
  );
};
