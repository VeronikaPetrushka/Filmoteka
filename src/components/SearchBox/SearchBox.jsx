import css from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {

  return (
    <div>
      <form>
        <div className={css.SearchContainer}>
            <input
            className={css.movieInput}
            type="text"
            placeholder='Type to search'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
