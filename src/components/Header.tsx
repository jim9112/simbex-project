import SearchBar from './SearchBar';

interface ComponentProps {
  userSearch: string;
  setUserSearch: Function;
}

const Header = ({ userSearch, setUserSearch }: ComponentProps) => {
  return (
    <header className="relative">
      <h1 className="text-center text-3xl mb-4 mt-4">
        Clinician Administration Page
      </h1>
      <SearchBar userSearch={userSearch} setUserSearch={setUserSearch} />
      <button className="text-xl border-b" type="button">
        Add Record
      </button>
    </header>
  );
};

export default Header;
