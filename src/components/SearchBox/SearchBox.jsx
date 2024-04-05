import css from './SearchBox.module.css';
import toast from 'react-hot-toast';
import { IoSearch } from "react-icons/io5";

const SearchBox = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const movie = form.elements.movie.value;

    if (movie.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSearch(movie);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <div className={css.searchContainer}>
          <div className={css.searchIconPosition}>
            <input
              className={css.movieInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Type to search"
              name="movie"
            />
            <button className={css.searchBtn} type="submit">
              <IoSearch size="20" />
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default SearchBox;
