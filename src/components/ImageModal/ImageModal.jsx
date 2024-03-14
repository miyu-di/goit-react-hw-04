import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export const ImageModal = ({ image, closeModal, isOpen }) => {
  return (
    <div>
      <Modal className={css.modal} isOpen={isOpen} onRequestClose={closeModal}>
        <div className={css.overlay} onClick={closeModal}>
          <div className={css.content}>
            <img
              className={css.image}
              src={image.urls.regular}
              alt={image.alt_description}
            />
            <div className={css.container}>
              <h2 className={css.title}>{image.alt_description}</h2>
              <p className={css.text}>Author: {image.user.name} </p>
              <p className={css.likes}>Likes: {image.likes}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
