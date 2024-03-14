import css from "./ImageCard.module.css";

export const ImageCard = ({ item }) => {
  return (
    <div>
      <img className={css.picture} src={item.urls.small} alt="" />
    </div>
  );
};
