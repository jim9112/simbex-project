interface ComponentProps {
  userSearch: string;
  setUserSearch: Function;
}

const SearchBar = ({ userSearch, setUserSearch }: ComponentProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={userSearch}
        onChange={(e) => setUserSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
