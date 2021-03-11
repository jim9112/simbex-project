import useForm from '../utilities/useForm';

interface ComponentProps {
  setModalOpen: Function;
  userData: { data: any } | null;
  setUserData: Function;
}

const FormModal = ({ setModalOpen, userData, setUserData }: ComponentProps) => {
  const { inputs, handleChange } = useForm();
  //  add id to new record and surface onSubmit
  return (
    <div className="absolute pt-5 top-0 bg-black bg-opacity-80 w-full h-full z-10">
      <form
        className="bg-white w-max m-auto p-4 rounded-sm"
        onSubmit={(e) => {
          e.preventDefault();
          const newUserData = userData;
          const userInputs = inputs;
          inputs.id = Date.now();
          newUserData?.data.result.push(userInputs);
          setUserData(newUserData);
          setModalOpen(false);
        }}>
        <h1 className="text-center mb-3 text-2xl">Add New Clinician</h1>
        <div className="grid sm:grid-cols-2 gap-2">
          <label htmlFor="firstName" className="relative text-indigo-900">
            First Name
            <input
              className="border shadow-inner rounded-sm text-gray-500 ml-2 relative right-0 "
              type="text"
              id="firstName"
              name="first_name"
              value={inputs.first_name ? inputs.first_name : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="lastName" className="relative text-indigo-900">
            Last Name
            <input
              className="border shadow-inner rounded-sm text-gray-500 ml-2 relative right-0"
              type="text"
              id="lastName"
              name="last_name"
              value={inputs.last_name ? inputs.last_name : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="relative text-indigo-900">
            Email
            <input
              className="border shadow-inner rounded-sm text-gray-500 ml-2 absolute right-0"
              type="email"
              id="email"
              name="email"
              value={inputs.email ? inputs.email : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="clinic" className="relative text-indigo-900">
            Clinic
            <input
              className="border shadow-inner rounded-sm text-gray-500 ml-2 absolute right-0"
              type="text"
              id="clinic"
              name="clinic_name"
              value={inputs.clinic_name ? inputs.clinic_name : ''}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="address1" className="relative text-indigo-900">
            Address 1
            <input
              className="border shadow-inner rounded-sm text-gray-500 ml-2 absolute right-0"
              type="text"
              id="address1"
              name="address1"
              value={inputs.address1 ? inputs.address1 : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="address2" className="relative text-indigo-900">
            Address 2
            <input
              className="border shadow-inner rounded-sm text-gray-500 ml-2 absolute right-0"
              type="text"
              id="address2"
              name="address2"
              value={inputs.address2 ? inputs.address2 : ''}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="city" className="relative text-indigo-900">
            City
            <input
              className="border shadow-inner rounded-sm text-gray-500 ml-2 absolute right-0"
              type="text"
              id="city"
              name="city"
              value={inputs.city ? inputs.city : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="State" className="relative text-indigo-900">
            State
            <input
              className="border shadow-inner rounded-sm text-gray-500 ml-2 absolute right-0"
              type="text"
              id="state"
              name="id_state"
              value={inputs.id_state ? inputs.id_state : ''}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="zip" className="relative text-indigo-900">
            Zipcode
            <input
              className="border shadow-inner rounded-sm text-gray-500 ml-2 absolute right-0"
              type="text"
              id="zip"
              name="zip"
              value={inputs.zip ? inputs.zip : ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mt-6 grid grid-flow-col gap-4">
          <button
            className="border-black border rounded-xl p-1"
            type="button"
            onClick={() => setModalOpen(false)}>
            Cancel
          </button>{' '}
          <button className="border-black border rounded-xl p-1" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormModal;
