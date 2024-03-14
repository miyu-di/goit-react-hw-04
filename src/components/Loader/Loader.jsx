import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.load}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#adfff5", "#9df3fc", "#9ddbfc", "#9dc0fc", "#9da3fc"]}
      />
    </div>
  );
};
