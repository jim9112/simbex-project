import useForm from '../utilities/useForm';

interface ComponentProps {
  setModalOpen: Function;
}

const FormModal = ({ setModalOpen }: ComponentProps) => {
  const { inputs, handleChange } = useForm();
  return (
    <div className="absolute pt-5 top-0 bg-black bg-opacity-80 w-full h-full z-10">
      <form className="bg-white w-max m-auto p-4">
        <h1 className="text-center">Add New Clinician</h1>
        <div className="grid sm:grid-cols-2">
          <label htmlFor="firstName">
            First Name
            <input
              className="border-b border-black"
              type="text"
              id="firstName"
              name="firstName"
              required
            />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input
              className="border-b border-black"
              type="text"
              id="lastName"
              name="lastName"
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              className="border-b border-black"
              type="email"
              id="email"
              name="email"
              required
            />
          </label>
          <label htmlFor="clinic">
            Clinic
            <input
              className="border-b border-black"
              type="text"
              id="clinic"
              name="clinic"
              required
            />
          </label>
          <label htmlFor="address1">
            Address 1
            <input
              className="border-b border-black"
              type="text"
              id="address1"
              name="address1"
              required
            />
          </label>
          <label htmlFor="address2">
            Address 2
            <input
              className="border-b border-black"
              type="text"
              id="address2"
              name="address2"
            />
          </label>
          <label htmlFor="city">
            City
            <input
              className="border-b border-black"
              type="text"
              id="city"
              name="city"
              required
            />
          </label>
          <label htmlFor="State">
            State
            <input
              className="border-b border-black"
              type="text"
              id="state"
              name="state"
              required
            />
          </label>
          <label htmlFor="zip">
            Zipcode
            <input
              className="border-b border-black"
              type="text"
              id="zip"
              name="zip"
              required
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={() => setModalOpen(false)}>
            Cancel
          </button>{' '}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormModal;
