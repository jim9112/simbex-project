import SearchBar from './SearchBar';

interface ComponentProps {
  userSearch: string;
  setUserSearch: Function;
}

const Header = ({ userSearch, setUserSearch }: ComponentProps) => {
  return (
    <header className="App">
      <h1 className="text-center">Clinician Administration Page</h1>
      <SearchBar userSearch={userSearch} setUserSearch={setUserSearch} />
    </header>
  );
};

export default Header;
