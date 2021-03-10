import SearchBar from './SearchBar';

interface ComponentProps {
  userSearch: string;
  setUserSearch: Function;
  modalOpen: boolean;
  setModalOpen: Function;
}

const Header = ({
  userSearch,
  setUserSearch,
  modalOpen,
  setModalOpen,
}: ComponentProps) => {
  return (
    <header className="relative border-b border-black">
      <h1 className="text-center text-3xl mb-4 mt-4">
        Clinician Administration Page
      </h1>
      <SearchBar userSearch={userSearch} setUserSearch={setUserSearch} />
      <button
        className="text-xl border-b"
        type="button"
        onClick={() => setModalOpen(true)}>
        Add Record
      </button>
    </header>
  );
};

export default Header;
