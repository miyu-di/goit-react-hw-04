import css from "./LoadMoreBtn.module.css"

export const LoadMoreBtn = ({ loadMore }) => {
    return (
      <div className={css.loadBtn}>
        <button className={css.btn} onClick={loadMore}>Load more</button>
      </div>
    );
}