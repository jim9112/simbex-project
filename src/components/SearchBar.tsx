interface ComponentProps {
  userSearch: string;
  setUserSearch: Function;
}

const SearchBar = ({ userSearch, setUserSearch }: ComponentProps) => {
  return (
    <input
      className="w-full border-b text-xl"
      type="text"
      placeholder="Search by Last Name"
      value={userSearch}
      onChange={(e) => setUserSearch(e.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
