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
      <div className="grid sm:grid-flow-col mb-3 sm:gap-16 sm:px-3">
        <SearchBar userSearch={userSearch} setUserSearch={setUserSearch} />
        <button
          className="text-xl border-black border rounded-xl p-1 mt-3 m-3 sm:m-0"
          type="button"
          onClick={() => setModalOpen(true)}>
          Add Record
        </button>
      </div>
    </header>
  );
};

export default Header;
